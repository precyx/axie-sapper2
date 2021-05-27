import { AxieBrief, AxiePart, AxieStats, AxieDetail, AxieCardAbility, AxieAuction, AxieBattleInfo } from "../model/Fragments/Axie.js";

const AXIE_V2_URL = "https://axieinfinity.com/api/v2";
const GRAPH_URL = "https://axieinfinity.com/graphql-server/graphql";
const GRAPH_V2_URL = "https://axieinfinity.com/graphql-server-v2/graphql"

export function getAxieBriefList({ from, size, sort, auctionType, owner, parts, querySelect, endpoint }, { classes, numMystics, stages, pureness, title }) {
  var query1 = `query GetAxieBriefList($auctionType: AuctionType, $criteria: AxieSearchCriteria, $from: Int, $sort: SortBy, $size: Int, $owner: String) {
    axies(auctionType: $auctionType, criteria: $criteria, from: $from, sort: $sort, size: $size, owner: $owner) {
      total

      ${querySelect == "minimal"
        ? ""
        : `results {
          ...AxieBrief
          __typename
        }`}
      __typename
    }
  }
  ${querySelect == "minimal" ? "" : AxieBattleInfo}
  ${querySelect == "minimal" ? "" : AxieCardAbility}
  ${querySelect == "minimal" ? "" : AxieBrief}
  ${querySelect == "minimal" ? "" : AxiePart}
  ${querySelect == "minimal" ? "" : AxieStats}
  `;

  let query = {
    operationName: "GetAxieBriefList",
    variables: {
      from: from || 0,
      size: size || 12,
      sort: sort || "PriceAsc",
      auctionType: auctionType || null,
      owner: owner || null,
      criteria: {
        parts: parts || null,
        bodyShapes: null,
        classes: classes || null,
        stages: stages || null,
        numMystic: numMystics || null,
        pureness: pureness || null,
        title: title || null,
        breedable: null,
        breedCount: null,
      },
    },
    query: query1,
  };

  let _endpoint = endpoint == "graph_v2" ? GRAPH_V2_URL : GRAPH_URL;

  return post(_endpoint, query);
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
  ${AxieAuction}
  `;

  var query = {
    operationName: "GetAxieDetail",
    variables: { axieId: axieId },
    query: query1,
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
      sireId: sireId,
    },
    query: query1,
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

export function getBodyParts() {
  let url = `${AXIE_V2_URL}/body-parts`;
  return get(url);
}

function get(url) {
  return fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  }).then(response => response.json());
}

function post(url, data) {
  return fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(response => response.json());
}
