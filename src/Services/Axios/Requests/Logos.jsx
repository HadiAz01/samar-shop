import apiRequests from "../Configs/configs"

const getAllLogos=()=>{
 return apiRequests.get('/logos')
}

export {getAllLogos}