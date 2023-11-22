export enum Stage {
  Dev = "dev",
  Prod = "prod"
}

export enum Domain {
  AI = "ai",
  Economy = "Economy",
  Trends = "Trends"
}

const config = {
  [Stage.Dev]: {
    [Domain.Trends]: {
      realtime: "http://localhost:3000/trends/realtime"
    },
    [Domain.Economy]: {
      stockCandle: "http://localhost:3000/economy/stock-candle"
    }
  },
  [Stage.Prod]: {}
};

const getConfig = (domain: Domain) => {
  return config?.[Stage.Dev]?.[domain]
}

export default getConfig;
