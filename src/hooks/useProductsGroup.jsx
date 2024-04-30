import { useQuery, useQueryClient } from '@tanstack/react-query'
import apiRequests from '../Services/Axios/Configs/configs'

export default function useProductsGroup(group) {
  const queryClient=useQueryClient()
  return (
    useQuery({
      queryKey: ["products",group],
      queryFn: () => apiRequests.get(`/products?group=${group}`).then((res) => res.data),
      initialData:()=>{
        const products=queryClient.getQueryData(["products"])
        const myCategoryProduct=products?.filter(product=>product.group===group)
        return myCategoryProduct
      }
      
    })
  )
}
