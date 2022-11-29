import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { NoticeCreateType } from "../pages/Notice/types";

const useCreateNotice = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (notice: NoticeCreateType) => axios.post("/api/notices/", notice).then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("notices");
      },
    }
  );
};

export { useCreateNotice };
