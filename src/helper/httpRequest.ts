import axios from "axios";

export const fetchLocal = async (
  url: string,
  options?: any,
  fake?: any
): Promise<any> => {
  if (fake) {
    return fake;
  }
  return await axios.get(url, options);
};
