import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { NoticeType } from "../pages/Notice/types";

const useDeleteNotice = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (notice: NoticeType) => axios.delete(`/api/notices/${notice.id}/`).then((res) => res.data),
    {
      onSuccess: () => queryClient.invalidateQueries("notices"),
    }
  );
};

export { useDeleteNotice };
