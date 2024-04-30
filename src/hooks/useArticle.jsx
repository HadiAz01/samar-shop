import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getArticle } from "../Services/Axios/Requests/Articles";

function useArticle(id) {

  const queryClient=useQueryClient()
  return useQuery({
    queryKey: ["articles", id],
    queryFn: () => getArticle(id).then((res) => res.data[0]),
    initialData:()=>{
      const articles=queryClient.getQueryData(["articles"])
      const article=articles?.find(article=>article.id===id)
      return article
    }
  });
}

export default useArticle;
