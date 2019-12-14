const GRAPH_URL = "https://axieinfinity.com/graphql-server/graphql";

export function getAxieBriefList({ from, size, sort, auctionType, owner }) {
  let query = {
    operationName: "GetAxieBriefList",
    variables: {
      from: from || 0,
      size: size || 12,
      sort: sort || "PriceAsc",
      auctionType: auctionType || null,
      owner: owner || null,
      region: null,
      criteria: {
        parts: null,
        bodyShapes: null,
        classes: null,
        stages: null,
        numMystic: null,
        pureness: null,
        title: null,
        breedable: null,
        breedCount: null
      }
    },
    query:
      "query GetAxieBriefList($auctionType: AxieAuctionType, $region: String, $criteria: AxieCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {\n  axies(auctionType: $auctionType, region: $region, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {\n    total\n    results {\n      ...AxieBrief\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment AxieBrief on Axie {\n  id\n  name\n  stage\n  class\n  exp\n  image\n  title\n  auction {\n    currentPrice\n    currentPriceUSD\n    __typename\n  }\n  parts {\n    ...AxiePart\n    __typename\n  }\n  __typename\n}\n\nfragment AxiePart on AxiePart {\n  id\n  name\n  class\n  type\n  mystic\n  bionic\n  xmas\n  stage\n  moves {\n    ...AxieMove\n    __typename\n  }\n  __typename\n}\n\nfragment AxieMove on AxieMove {\n  id\n  name\n  type\n  attack\n  defense\n  accuracy\n  stage\n  effects {\n    ...AxieMoveEffect\n    __typename\n  }\n  __typename\n}\n\nfragment AxieMoveEffect on AxieMoveEffect {\n  name\n  type\n  description\n  __typename\n}\n"
  };

  return post(GRAPH_URL, query);
}

function post(url, data) {
  return fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(data)
  }).then(response => response.json());
}
