import { useQuery } from "@tanstack/react-query";
import { getAllArticles } from "../Services/Axios/Requests/Articles";

export default function useArticles() {
  return useQuery({
    queryKey: ["articles"],
    queryFn: () => getAllArticles().then((res) => res.data),
  });
}
