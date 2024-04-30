import apiRequests from "../Configs/configs"

const addCustomerInfo=(customer)=>{
  return apiRequests.post('/customer',customer)
 }

 export {addCustomerInfo}