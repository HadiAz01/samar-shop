import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../Services/Axios/Requests/Products";

export default function useProduct(id) {
 
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id).then((res) => res.data[0]),
  });
}
