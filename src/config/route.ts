import CreateTeam from "../components/pages/create-team/CreateTeam";
import Home from "../components/pages/home/Home";
import Playbook from "../components/pages/playbooks/Playbooks";
import Profile from "../components/pages/profile/Profile";
import Teams from "../components/pages/teams/Teams";
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
    component: Teams,
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
