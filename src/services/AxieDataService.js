const GRAPH_URL = "https://axieinfinity.com/graphql-server/graphql";

export function getAxieBriefList(
  { from, size, sort, auctionType, owner },
  { classes, numMystics, stages }
) {
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
        classes: classes || null,
        stages: stages || null,
        numMystic: numMystics || null,
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

export function getAxieDetail({ axieId }) {
  var query = {
    operationName: "GetAxieDetail",
    variables: { axieId: axieId },
    query:
      "query GetAxieDetail($axieId: ID!) {\n  axie(axieId: $axieId) {\n    ...AxieDetail\n    __typename\n  }\n}\n\nfragment AxieDetail on Axie {\n  id\n  name\n  genes\n  owner\n  birthDate\n  bodyShape\n  class\n  sireId\n  sireClass\n  matronId\n  matronClass\n  stage\n  title\n  breedCount\n  breedable\n  exp\n  level\n  unlocked\n  figure {\n    atlas\n    model\n    image\n    __typename\n  }\n  parts {\n    ...AxiePart\n    __typename\n  }\n  stats {\n    ...AxieStats\n    __typename\n  }\n  battleInfo {\n    ...AxieBattleInfo\n    __typename\n  }\n  auction {\n    ...AxieAuction\n    __typename\n  }\n  ownerProfile {\n    name\n    __typename\n  }\n  __typename\n}\n\nfragment AxiePart on AxiePart {\n  id\n  name\n  class\n  type\n  mystic\n  bionic\n  xmas\n  stage\n  moves {\n    ...AxieMove\n    __typename\n  }\n  __typename\n}\n\nfragment AxieMove on AxieMove {\n  id\n  name\n  type\n  attack\n  defense\n  accuracy\n  stage\n  effects {\n    ...AxieMoveEffect\n    __typename\n  }\n  __typename\n}\n\nfragment AxieMoveEffect on AxieMoveEffect {\n  name\n  type\n  description\n  __typename\n}\n\nfragment AxieStats on AxieStats {\n  hp\n  speed\n  skill\n  morale\n  __typename\n}\n\nfragment AxieBattleInfo on AxieBattleInfo {\n  activityPoint\n  pendingExp\n  expSignature\n  __typename\n}\n\nfragment AxieAuction on Auction {\n  startingPrice\n  endingPrice\n  startingTimestamp\n  endingTimestamp\n  duration\n  timeLeft\n  currentPrice\n  currentPriceUSD\n  suggestedPrice\n  seller\n  listingIndex\n  auctionType\n  __typename\n}\n"
  };

  return post(GRAPH_URL, query);
}

export function getProfileByEthAddress({ ethereumAddress }) {
  var query = {
    operationName: "GetProfileByEthAddress",
    variables: {
      ethereumAddress: ethereumAddress
    },
    query:
      "query GetProfileByEthAddress($ethereumAddress: String!) {\n  publicProfileWithEthereumAddress(ethereumAddress: $ethereumAddress) {\n    ...Profile\n    __typename\n  }\n}\n\nfragment Profile on PublicProfile {\n  accountId\n  name\n  addresses {\n    ...Addresses\n    __typename\n  }\n  __typename\n}\n\nfragment Addresses on NetAddresses {\n  ethereum\n  tomo\n  loom\n  __typename\n}\n"
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
