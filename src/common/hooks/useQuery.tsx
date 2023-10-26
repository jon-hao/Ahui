import { useEffect, useState } from "react";
import { TRequest, fetchData } from "src/common";

const useQuery = (endpoint: string, option?: TRequest): [data: any, loading: boolean] => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchOriginData = async () => {
    setLoading(true);
    const result = await fetchData(endpoint, option);
    setData(result);
    setLoading(false);
  }

  useEffect(() => {
    fetchOriginData()
  }, [])

  return [data, loading]
}

export default useQuery;
