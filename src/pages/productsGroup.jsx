import Breadcrumb from "../components/Breadcrumb";
import ComponentTextArea from "../components/ComponentTextArea";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductBox from "../components/ProductBox";
import dataClassificationEachPage from "../utilities/DataPagination";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import Sorting from "../components/Sorting";
import { useContext, useEffect, useState } from "react";
import useProductsGroup from "../hooks/useProductsGroup";
import useGroupDescription from "../hooks/useGroupDescription";
import { getProductsCart } from "../Services/Axios/Requests/Products";
import { useQuery } from "@tanstack/react-query";
import authContext from "../context/AuthContext";

export default function ProductsGroup() {
  const pageParam = useParams().page;
  const categoryParam = useParams().category;
  const groupParam = useParams().group;

  let ItemsCount = 12;
  const userContext=useContext(authContext)

  const { data: description, isPending: isPendingGroup } =
    useGroupDescription(groupParam);

    const {data:productsCart,refetch:refetchProductsCart}=useQuery({queryKey:['productsCart'],queryFn:()=>getProductsCart(userContext.userInfo.id).then(res=>res.data)})

    
  const { data, isPending } = useProductsGroup(groupParam);

  const [filteredData, setFilteredData] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [topic, setTopic] = useState();
  const [categoryTopic, setCategoryTopic] = useState('');

  useEffect(() => {
    isPending === false &&
      (setFilteredData(data),
      setTopic(data[0].groupFn),
      setCategoryTopic(data[0].categoryFn));
  }, [isPending, data]);

  useEffect(() => {
    setCurrentProduct(
      dataClassificationEachPage(filteredData, pageParam, ItemsCount)
    );
  }, [pageParam, filteredData]);

  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          {
            id: 2,
            to: `/product-category/${categoryParam}/1`,
            title: categoryTopic,
          },
          {
            id: 3,
            to: `/product-category/${categoryParam}/${groupParam}`,
            title: topic,
          },
        ]}
      />
      <div className="container">
        {isPending && isPendingGroup ? (
          <>
            <div className="flex justify-center ">
              <ScaleLoader color="#d75328" width={10} />
            </div>
          </>
        ) : (
          <>
            <Sorting data={data} setFilteredData={setFilteredData} />
            {filteredData.length > 0 ? (
              <>
                {" "}
                <ComponentTextArea blackText={topic} />
                
                  <div className="mb-6 text-center leading-7">
                    <div
                      dangerouslySetInnerHTML={{ __html: description?.desc }}
                    ></div>
                  </div>
               
                <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 xs:grid-cols-2">
                  {currentProduct.map((product) => (
                    <>
                      <div className="relative group" key={product.id}>
                        <ProductBox product={product} productsCart={productsCart} refetchProductsCart={refetchProductsCart}/>
                      </div>
                    </>
                  ))}
                </div>
                <Pagination
                  dataLength={filteredData.length}
                  ItemsCount={ItemsCount}
                  link={`/product-category/${categoryParam}`}
                />
              </>
            ) : (
              <div className="bg-rose-300 text-center p-4 mt-4 text-white">
                محصولی با این دسته بندی وجود ندارد
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
