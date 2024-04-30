import { Link } from "react-router-dom";
import addComma from "../utilities/AddCommaToNumber";
import {
  addProductToCart,
  editProductCart,
} from "../Services/Axios/Requests/Products";
import { useContext } from "react";
import authContext from "../context/AuthContext";
import Swal from "sweetalert2";

export default function ProductBox({
  product,
  productsCart,
  refetchProductsCart,
}) {
  const AuthContext = useContext(authContext);

  const addProductCart = () => {
    if (AuthContext.isLoggedIn) {
      let repetitiveProductInCart = productsCart.filter(
        (item) => item?.id === product?.id
      );

      if (repetitiveProductInCart.length === 0) {
        const productInfo = {
          id: product.id,
          userId: AuthContext.userInfo.id,
          cover: product.src,
          title: product.title,
          price: product.discount === "No" ? product.price : product.discount,
          productCount: 1,
        };
        addProductToCart(productInfo);
      } else {
        const productInfo = {
          id: product.id,
          userId: AuthContext.userInfo.id,
          cover: product.src,
          title: product.title,
          price: product.discount === "No" ? product.price : product.discount,
          productCount: 1 + Number(repetitiveProductInCart[0]?.productCount),
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
      refetchProductsCart();
    } else {
      Swal.fire({
        title: "وارد حساب کاربری خود شوید",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <>
      <div className=" shadow-center-lg h-[415px] flex flex-col justify-between rounded-sm overflow-hidden">
        {/* has discount */}
        {product.discount !== "No" ? (
          <span className="bg-red-550 tracking-tighter text-white absolute z-20 p-2 font-iranSansMedium left-3 top-3">
            تخفیف!
          </span>
        ) : null}

        <div className="overlay-product  border-b-2 h-4/6 flex items-center justify-center border-black">
          <img
            className="object-cover h-full "
            loading="lazy"
            src={product.src}
            alt=""
          />

          <div>
            <button
              className="absolute inset-0 z-10 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible justify-center items-center bg-white shadow-md border border-brown-100 rounded-full m-auto p-2 w-fit h-fit text-brown-100 transition-all "
              onClick={addProductCart}
            >
              افزودن به سبد خرید
            </button>
          </div>
        </div>
        {/* cart footer */}
        <div className=" p-1 pt-4 flex flex-col justify-between text-sm sm:text-base">
          <h3 className="flex justify-center items-center line-clamp-1 text-justify">
            {product.title}
          </h3>
          <div className="flex items-center justify-between p-3">
            <Link to={`/product/${product.id}`} className="p-2 bg-amber-400">
              نمایش بیشتر
            </Link>
            <div className="flex flex-col">
              {product.discount !== "No" ? (
                <>
                  <div className=" decoration-trough flex">
                    <span>{addComma(product.price)}</span>
                    <span>تومان</span>
                  </div>
                  <div className="flex">
                    <span>{addComma(product.discount)}</span>
                    <span>تومان</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex">
                    <span className="">{addComma(product.price)}</span>
                    <span>تومان</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
