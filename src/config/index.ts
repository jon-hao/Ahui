export enum Stage {
  Dev = "dev",
  Prod = "prod"
}

export enum Domain {
  AI = "ai",
  Data = "Data"
}

const config = {
  [Stage.Dev]: {
    [Domain.Data]: {
      marketSentiment: "http://localhost:3000/data/market-sentiment"
    }
  },
  [Stage.Prod]: {}
};

const getConfig = (domain: Domain) => {
  return config?.[Stage.Dev]?.[domain]
}

export default getConfig;
