import { createContext } from "react";

const authContext=createContext({
  isLoggedIn:false,
  userInfo:{},
  
})

export default authContext