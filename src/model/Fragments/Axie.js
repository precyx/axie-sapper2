export const AxieBrief = `
fragment AxieBrief on Axie {
  id
  name
  stage
  class
  exp
  image
  title
  breedCount
  ownerProfile {
    name
    __typename
  }
  auction {
    currentPrice
    currentPriceUSD
    __typename
  }
  stats {
    ...AxieStats
    __typename
  }
  parts {
    ...AxiePart
    __typename
  }
  __typename
}`;

export const AxiePart = `
fragment AxiePart on AxiePart {
  id
  name
  class
  type
  mystic
  bionic
  xmas
  stage
  abilities {
    ...AxieCardAbility
    __typename
  }
  __typename
}`;

/*export const AxieMove = `
fragment AxieMove on AxieMove {
  id
  name
  type
  attack
  defense
  accuracy
  stage
  effects {
    ...AxieMoveEffect
    __typename
  }
  __typename
}`;*/

export const AxieStats = `
fragment AxieStats on AxieStats {
  hp
  speed
  skill
  morale
  __typename
}`;

/*export const AxieMoveEffect = `
fragment AxieMoveEffect on AxieMoveEffect {
  name
  type
  description
  __typename
}`;*/

export const AxieCardAbility = `
fragment AxieCardAbility on AxieCardAbility {
  id
  name
  attack
  defense
  energy
  description
  backgroundUrl
  effectIconUrl
  __typename
}
`;

/*export const AxieBattleInfo = `
fragment AxieBattleInfo on AxieBattleInfo {
  activityPoint
  pendingExp
  expSignature
  __typename
}`;*/

export const AxieAuction = `
fragment AxieAuction on Auction {
  startingPrice
  endingPrice
  startingTimestamp
  endingTimestamp
  duration
  timeLeft
  currentPrice
  currentPriceUSD
  suggestedPrice
  seller
  listingIndex
  auctionType
  __typename
}`;

export const AxieDetail = `
fragment AxieDetail on Axie {
  id
  name
  genes
  owner
  birthDate
  bodyShape
  class
  sireId
  sireClass
  matronId
  matronClass
  stage
  title
  breedCount
  breedable
  exp
  level
  unlocked
  figure {
    atlas
    model
    image
    __typename
  }
  parts {
    ...AxiePart
    __typename
  }
  stats {
    ...AxieStats
    __typename
  }
  auction {
    ...AxieAuction
    __typename
  }
  ownerProfile {
    name
    __typename
  }
  children {
    id
    name
    class
    image
    title
    stage
    __typename
  }
  __typename
}`;
