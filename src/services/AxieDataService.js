import {
  AxieBrief,
  AxiePart,
  AxieStats,
  AxieDetail,
  AxieCardAbility,
  AxieBattleInfo,
  AxieAuction
} from "../model/Fragments/Axie.js";

const GRAPH_URL = "https://axieinfinity.com/graphql-server/graphql";

export function getAxieBriefList(
  { from, size, sort, auctionType, owner, region },
  { classes, numMystics, stages, pureness, title }
) {
  var query1 = `query GetAxieBriefList($auctionType: AxieAuctionType, $region: String, $criteria: AxieCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {
    axies(auctionType: $auctionType, region: $region, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {
      total
      results {
        ...AxieBrief
        __typename
      }
      __typename
    }
  }

  ${AxieCardAbility}
  ${AxieBrief}
  ${AxiePart}
  ${AxieStats}
  `;

  let query = {
    operationName: "GetAxieBriefList",
    variables: {
      from: from || 0,
      size: size || 12,
      sort: sort || "PriceAsc",
      auctionType: auctionType || null,
      owner: owner || null,
      region: region || null,
      criteria: {
        parts: null,
        bodyShapes: null,
        classes: classes || null,
        stages: stages || null,
        numMystic: numMystics || null,
        pureness: pureness || null,
        title: title || null,
        breedable: null,
        breedCount: null
      }
    },
    query: query1
  };

  return post(GRAPH_URL, query);
}

export function getAxieDetail({ axieId }) {
  let query1 = `query GetAxieDetail($axieId: ID!) {
    axie(axieId: $axieId) {
      ...AxieDetail
      __typename
    }
  }

  ${AxieDetail}
  ${AxiePart}
  ${AxieCardAbility}
  ${AxieStats}
  ${AxieBattleInfo}
  ${AxieAuction}
  `;

  var query = {
    operationName: "GetAxieDetail",
    variables: { axieId: axieId },
    query: query1
  };

  return post(GRAPH_URL, query);
}

export function getParentsBrief({ matronId, sireId }) {
  let query1 = `query GetParentsBrief($matronId: ID!, $sireId: ID!) {
    matron: axie(axieId: $matronId) {
      ...AxieBrief
      __typename
    }
    sire: axie(axieId: $sireId) {
      ...AxieBrief
      __typename
    }
  }

  ${AxiePart}
  ${AxieCardAbility}
  ${AxieStats}
  ${AxieBrief}
  `;

  var query = {
    operationName: "GetParentsBrief",
    variables: {
      matronId: matronId,
      sireId: sireId
    },
    query: query1
  };

  return post(GRAPH_URL, query);
}

/* @deprecated */
/*
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
}*/

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
