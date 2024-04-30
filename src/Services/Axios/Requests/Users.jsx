import apiRequests from "../Configs/configs"

const addUser=(user)=>{
 return apiRequests.post('/users',user)
}

const addCustomer=(user)=>{
 return apiRequests.post('/users',user)
}

const loginUser=(user)=>{
  return apiRequests.get(`/users?userName=${user.userName}&password=${user.password}`)
}

const getUserInfo=(token)=>{
  return apiRequests.get(`/users?token=${token}`)
}

const getUsers=()=>{
  return apiRequests.get('/users')}

  const editUser=(id,newUser)=>{
    return apiRequests.put(`/users/${id}`,newUser)
  }

export {addUser,loginUser,getUserInfo,addCustomer,getUsers,editUser}