import axios from "axios";
import { PlaybookType } from "../constants/playbook";

const image =
  "http://p7.itc.cn/images01/20200625/d166188afd2a4448bf372f5d1a91d79b.jpeg";

export const fetchLocal = async (url: string, options?: any): Promise<any> => {
  return [
    {
      type: PlaybookType.Hardcore,
      name: "The Past",
      image,
      total: [4, 2],
      current: [2, 2],
      reverse: true,
      link: "www.baidu.com",
      joined: false,
    },
    {
      type: PlaybookType.Joy,
      name: "拆迁",
      image,
      total: [5, 5],
      current: [5, 5],
      reverse: true,
      link: "www.baidu.com",
      joined: true,
    },
    {
      type: PlaybookType.Emotion,
      name: "兵临城下2",
      image,
      total: [4, 4],
      current: [3, 1],
      reverse: true,
      link: "www.baidu.com",
      joined: false,
    },
    {
      type: PlaybookType.Horror,
      name: "爱幼妇产医院",
      image,
      total: [4, 4],
      current: [1, 3],
      reverse: true,
      link: "www.baidu.com",
      joined: false,
    },
  ];
  // return await axios.get(url, options);
};
