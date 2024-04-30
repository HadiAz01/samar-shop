
import apiRequests from '../Services/Axios/Configs/configs'
import { useQuery } from '@tanstack/react-query'

export default function useCategoryDescription(category) {
  return (
    useQuery({queryKey:["categoryDesc",category],queryFn:()=> apiRequests.get(`/products-category?category=${category}`).then(res=>res.data[0])})
   
  )
}
