import { useEffect, useState } from "react";
import { TRequest, fetchData } from "src/common";

const useQuery: React.FC<any> = (endpoint: string, option?: TRequest) => {
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
