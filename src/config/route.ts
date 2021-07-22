import CreateTeam from "../components/create-team/CreateTeam";
import Home from "../components/home/Home";
import Playbook from "../components/playbook-list/Playbook";
import Profile from "../components/profile/Profile";
import TeamList from "../components/team-list/TeamList";
import { PageName, PagePath } from "../constants/page";

const pagesConfig = [
  {
    name: PageName.Home,
    path: PagePath.Home,
    exact: true,
    component: Home,
    fixtureToggle: true,
  },
  {
    name: PageName.Playbook,
    path: PagePath.Playbook,
    exact: true,
    component: Playbook,
    fixtureToggle: true,
  },
  {
    name: PageName.CreateTeam,
    path: PagePath.CreateTeam,
    exact: true,
    component: CreateTeam,
    fixtureToggle: true,
  },,
  {
    name: PageName.Team,
    path: PagePath.Team,
    exact: true,
    component: TeamList,
    fixtureToggle: true,
  },
  {
    name: PageName.Profile,
    path: PagePath.Profile,
    exact: true,
    component: Profile,
    fixtureToggle: true,
  },
];

export default pagesConfig;
