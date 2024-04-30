import { useQuery, useQueryClient } from '@tanstack/react-query'
import apiRequests from '../Services/Axios/Configs/configs'

export default function useProductsCategory(category) {
  const queryClient=useQueryClient()
  return (
    useQuery({
      queryKey: ["products",category],
      queryFn: () => apiRequests.get(`/products?category=${category}`).then((res) => res.data),
      initialData:()=>{
        const products=queryClient.getQueryData(["products"])
        const myCategoryProduct=products?.filter(product=>product.category===category)
        return myCategoryProduct
      }
      
    })
  )
}
