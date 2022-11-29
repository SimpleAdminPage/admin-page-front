import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { NoticeType } from "../pages/Notice/types";

const useUpdateNotice = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (notice: NoticeType) => axios.put(`/api/notices/${notice.id}/`, notice).then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("notices");
      },
    }
  );
};

export { useUpdateNotice };
