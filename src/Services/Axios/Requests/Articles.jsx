import apiRequests from "../Configs/configs"

const getAllArticles=()=>{
  return apiRequests.get('/articles')
}

const getArticle=(id)=>{
  return apiRequests.get(`/articles?id=${id}`)
}

export {getAllArticles,getArticle}