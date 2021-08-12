import CreateTeam from "../components/create-team/CreateTeam";
import Home from "../components/home/Home";
import Playbook from "../components/playbooks/Playbooks";
import Profile from "../components/profile/Profile";
import TeamList from "../components/teams/Teams";
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
    name: PageName.Teams,
    path: PagePath.Teams,
    exact: true,
    component: TeamList,
    fixtureToggle: true,
  },
  {
    name: PageName.CreateTeam,
    path: PagePath.CreateTeam,
    exact: true,
    component: CreateTeam,
    fixtureToggle: true,
  },
  {
    name: PageName.Playbooks,
    path: PagePath.Playbooks,
    exact: true,
    component: Playbook,
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
