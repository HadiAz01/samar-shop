
import apiRequests from "../Configs/configs"

const getAllProducts = ()=>{
  return apiRequests.get('/products')
}

const getProduct = (id)=>{
  return apiRequests.get(`/product-info?id=${id}`)
}

const getLastProducts = ()=>{
return  apiRequests.get('/products?_limit=8')
 
}

const getAllClocks = () =>{
  return apiRequests.get('/products?group=clock')
}

const getAllFigures = () =>{
  return apiRequests.get('/products?group=figure')
}

const addProductToCart=(productInfo)=>{
  return apiRequests.post('/product-cart',productInfo)
}

const editProductCart=(productInfo,id)=>{
  return apiRequests.put(`/product-cart/${id}`,productInfo)
}

const getProductsCart=(userId)=>{
  return apiRequests.get(`/product-cart?userId=${userId}`)
}

const removeProductCart=(id)=>{
  return apiRequests.delete(`/product-cart/${id}`)
}

const editCountOfProductCart=(id,productCount)=>{
  return apiRequests.put(`/product-cart/${id}`,productCount)
}

export {getLastProducts,getAllClocks,getAllFigures,getAllProducts,getProduct,addProductToCart,getProductsCart,removeProductCart,editProductCart,editCountOfProductCart}
