import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import useProduct from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import addComma from "../utilities/AddCommaToNumber";
import {
  addProductToCart,
  editProductCart,
  getProductsCart,
} from "../Services/Axios/Requests/Products";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import authContext from "../context/AuthContext";
import Swal from "sweetalert2";

export default function Product() {
  const id = useParams().id;

  const AuthContext = useContext(authContext);

  const tabRef = useRef(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [productCount, setProductCount] = useState(1);
  const { isPending, data: product } = useProduct(id);

  const changeProductCount = (event) => {
    setProductCount(event.target.value);
  };

  const { data: productsCart, refetch } = useQuery({
    queryKey: ["productsCart"],
    queryFn: () =>
      getProductsCart(AuthContext.userInfo.id).then((res) => res.data),
  });

  const addProductToBasket = (e) => {
    e.preventDefault();
    if (AuthContext.isLoggedIn) {
      let repetitiveProductInCart = productsCart.filter(
        (item) => item?.id === product?.id
      );

      if (repetitiveProductInCart.length === 0) {
        const productInfo = {
          id: product.id,
          userId: AuthContext.userInfo?.id,
          cover: product.covers[0],
          title: product.title,
          price: product.discount === "No" ? product.price : product.discount,
          productCount,
        };
        addProductToCart(productInfo);
      } else {
        const productInfo = {
          id: product.id,
          userId: AuthContext.userInfo.id,
          cover: product.covers[0],
          title: product.title,
          price: product.discount === "No" ? product.price : product.discount,
          productCount:
            Number(productCount) +
            Number(repetitiveProductInCart[0]?.productCount),
        };
        editProductCart(productInfo, product.id);
      }
      Swal.fire({
        title: "محصول به سبد خرید اضافه شد",
        position: "center",
        timer: 2000,
        icon: "success",
        showConfirmButton: false,
      });
      refetch();
    } else {
      Swal.fire({
        title: "لطفا وارد حساب کاربری خود شوید",
        position: "center",
        timer: 2000,
        icon: "warning",
        showConfirmButton: false,
      });
    }
  };

  const unActiveTab = (tabs) => {
    tabs.forEach((tab) => tab.classList.remove("border-b-4"));
  };

  const activationTab = (e) => {
    const contentsTab = [...tabRef.current.children];
    const tabs = [...e.target.parentElement.children];
    unActiveTab(tabs);
    e.target.classList.add("border-b-4");

    contentsTab.forEach((content) => content.classList.add("hidden"));

    switch (e.target.name) {
      case "desc":
        contentsTab[0].classList.remove("hidden");
        break;
      case "details":
        contentsTab[1].classList.remove("hidden");
        break;
      case "comments":
        contentsTab[2].classList.remove("hidden");
        break;

      default:
        null;
        break;
    }
  };

  return (
    <>
      <Header />
      {isPending ? (
        <>
          <div className="flex justify-center">
            <ScaleLoader color="#d75328" width={10} />
          </div>
        </>
      ) : (
        <>
          <Breadcrumb
            links={[
              { id: 1, to: "/", title: "صفحه اصلی" },
              {
                id: 2,
                to: `/product-category/${product.category}/1`,
                title: product.categoryFn,
              },
              {
                id: 3,
                to: `/product-category/${product.category}/${product.group}/1`,
                title: product.groupFn,
              },
              {
                id: 4,
                to: `/product/${product.id}`,
                title: product.title,
              },
            ]}
          />
          <div className="container mt-10">
            <div className="flex md:flex-row flex-col gap-y-6">
              <div className="swiper md:w-1/2 w-full px-4">
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  centeredSlides={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2 "
                >
                  {product.covers.map((cover) => (
                    <>
                      <SwiperSlide key={cover.id}>
                        <img src={cover} className="w-full object-cover" />
                      </SwiperSlide>
                    </>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  navigation={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper shadow-center-sm"
                >
                  {product.covers.map((cover) => (
                    <>
                      <SwiperSlide key={cover.id}>
                        <img src={cover} />
                      </SwiperSlide>
                    </>
                  ))}
                </Swiper>
              </div>
              <div className="md:w-1/2 w-full px-4 lg:py-10 py-4">
                <h2 className="text-2xl font-iranSansBold">{product.title}</h2>
                <div className="font-iranSansMedium text-xl text-brown-100 flex gap-10 my-6">
                  <span>قیمت:</span>
                  {product.discount === "No" ? (
                    <p>
                      {addComma(product.price.toLocaleString())}
                      <span>تومان</span>
                    </p>
                  ) : (
                    <>
                      <p className="decoration-trough">
                        {product.price.toLocaleString()}
                        <span>تومان</span>
                      </p>
                      <p>
                        {product.discount.toLocaleString()}
                        <span>تومان</span>
                      </p>
                    </>
                  )}
                </div>
                <p className="l leading-7">{product.basicDescription}</p>
                <form
                  className="flex gap-1 my-6"
                  onSubmit={(e) => addProductToBasket(e)}
                >
                  <input
                    className="outline-none border w-3/12 lg:w-2/12  p-2 rounded-lg text-center"
                    type="number"
                    name=""
                    min="1"
                    value={productCount}
                    onChange={(e) => changeProductCount(e)}
                  />
                  <button className="buttons w-1/2 lg:w-4/12" type="submit">
                    افزودن به سبد خرید
                  </button>
                </form>
              </div>
            </div>
            <div className="flex gap-6 mt-10 border-b ">
              <button
                onClick={(e) => activationTab(e)}
                name="desc"
                className=" border-b-4 border-brown-100 py-3 "
              >
                توضیحات
              </button>
              <button
                onClick={(e) => activationTab(e)}
                name="details"
                className="py-3 border-brown-100"
              >
                توضیحات تکمیلی
              </button>
              <button
                onClick={(e) => activationTab(e)}
                name="comments"
                className="py-3 border-brown-100"
              >
                نظرات (0)
              </button>
            </div>
            <div className="pt-8" ref={tabRef}>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
              <div className="hidden details">
                <table className="w-full rounded-sm ">
                  <tbody className="  table-auto ">
                    {product.property.map((item, index) => (
                      <>
                        <tr
                          key={index + 1}
                          className="child:py-2 child:ps-4 odd:bg-beige-200 even:bg-gray-100"
                        >
                          <td className="border-e border-gray-200 font-iranSansMedium">
                            {Object.keys(item)}
                          </td>
                          <td>{Object.values(item)}</td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="hidden comments">
                <p className="bg-rose-100 p-2 text-center">
                  هیچ دیدگاهی برای این محصول نوشته نشده است.
                </p>
                <p className="mt-4">
                  لطفا دیدگاه خود را در رابطه با این محصول بنویسید
                </p>
                <form className="mt-6 flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="userName">نام کاربری:</label>
                    <input
                      className=" outline-none bg-beige-100 p-2"
                      type="text"
                      name=""
                      id="userName"
                    />
                  </div>
                  <div>
                    <label htmlFor="opinion">دیدگاه شما:</label>
                    <textarea
                      id="opinion"
                      className="bg-beige-100 w-full outline-none p-2 text-sm"
                      rows="2"
                    ></textarea>
                  </div>
                  <button className="buttons  w-3/12" type="submit">
                    ثبت
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
