
import apiRequests from '../Services/Axios/Configs/configs'
import { useQuery } from '@tanstack/react-query'

export default function useGroupDescription(group) {
  return (
    useQuery({queryKey:["groupDesc",group],queryFn:()=> apiRequests.get(`/products-group?group=${group}`).then(res=>res.data[0])})
   
  )
}
