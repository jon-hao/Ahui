import { PlaybookType } from "../../../constants/playbook";

export type TFilter = {
  type?: PlaybookType;
};

export type TTeam = {
  type: PlaybookType;
  name: string;
  image: string;
  total: number[];
  current: number[];
  reverse: boolean;
  link: string;
  joined: boolean;
}
