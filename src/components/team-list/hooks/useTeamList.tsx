import { useEffect, useState } from "react";
import { fetchLocal } from "../../../helper/httpRequest";
import { Filter } from "../types/param";

const useTeamList = (filter: Filter) => {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    const fetchTeamList = async () => {
      const result = await fetchLocal("");
      setTeamList(result);
    };
    fetchTeamList();
  }, [filter]);

  return teamList;
};

export default useTeamList;
