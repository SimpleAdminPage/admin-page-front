import { useQuery } from "react-query";
import axios from "axios";

const useNotices = () => {
  return useQuery("notices", () => axios.get("/api/notices/").then((res) => res.data));
};

export { useNotices };
