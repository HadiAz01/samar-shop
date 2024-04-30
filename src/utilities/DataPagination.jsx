const dataClassificationEachPage=(data,pageParam,ItemsCount)=>{
  return data?.slice(((Number(pageParam)*ItemsCount)-ItemsCount),(Number(pageParam)*ItemsCount))
 }

 export default dataClassificationEachPage