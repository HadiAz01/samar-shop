import ComponentTextArea from "./ComponentTextArea";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import {
  getLastProducts,
  getProductsCart,
} from "../Services/Axios/Requests/Products";
import ProductBox from "./ProductBox";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import authContext from "../context/AuthContext";

export default function LastProduct() {
  const userContext = useContext(authContext);

  const { data } = useQuery({
    queryKey: ["lastProduct"],
    queryFn: () => getLastProducts().then((res) => res.data),
  });

  const { data: productsCart, refetch: refetchProductsCart } = useQuery({
    queryKey: ["productsCart"],
    queryFn: () =>
      getProductsCart(userContext.userInfo.id).then((res) => res.data),
  });

  return (
    <>
      <div className="container">
        <ComponentTextArea brownText="آخرین محصولات" blackText="فروشگاه" />
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          lazy={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper py-2"
        >
          {data?.map((product) => (
            <>
              <SwiperSlide
                key={product.id}
                className=" group relative p-1 shadow-md "
              >
                <ProductBox
                  product={product}
                  productsCart={productsCart}
                  refetchProductsCart={refetchProductsCart}
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
        <div className="swiper-custom-pagination flex items-center justify-center gap-1 p-3 " />
      </div>
    </>
  );
}
