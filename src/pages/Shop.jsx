import { useQuery } from "@tanstack/react-query";
import Breadcrumb from "../components/Breadcrumb";
import ComponentTextArea from "../components/ComponentTextArea";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  getAllProducts,
  getProductsCart,
} from "../Services/Axios/Requests/Products";
import ProductBox from "../components/ProductBox";
import dataClassificationEachPage from "../utilities/DataPagination";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import Sorting from "../components/Sorting";
import { useContext, useEffect, useState } from "react";
import authContext from "../context/AuthContext";

export default function Shop() {
  const pageParam = useParams().page;

  const userContext = useContext(authContext);
  let ItemsCount = 12;

  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts().then((res) => res.data),
  });

  const { data: productsCart, refetch: refetchProductsCart } = useQuery({
    queryKey: ["productsCart"],
    queryFn: () =>
      getProductsCart(userContext.userInfo.id).then((res) => res.data),
  });

  const [filteredData, setFilteredData] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);

  useEffect(() => {
    isPending === false && setFilteredData(data);
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
          { id: 2, to: "/shop", title: "فروشگاه" },
        ]}
      />

      <div className="container">
        {isPending ? (
          <>
            <div className="flex justify-center">
              <ScaleLoader color="#d75328" width={10} />
            </div>
          </>
        ) : (
          <>
            <Sorting data={data} setFilteredData={setFilteredData} />
            <ComponentTextArea blackText="فروشگاه" />
            <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 xs:grid-cols-2">
              {currentProduct.map((product) => (
                <>
                  <div className="relative group" key={product.id}>
                    <ProductBox
                      product={product}
                      productsCart={productsCart}
                      refetchProductsCart={refetchProductsCart}
                    />
                  </div>
                </>
              ))}
            </div>
            <Pagination
              dataLength={filteredData.length}
              ItemsCount={ItemsCount}
              link="/shop"
            />
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
