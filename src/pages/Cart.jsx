import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ComponentTextArea from "../components/ComponentTextArea";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  editCountOfProductCart,
  getProductsCart,
  removeProductCart,
} from "../Services/Axios/Requests/Products";
import { ScaleLoader } from "react-spinners";
import { useContext, useEffect, useState } from "react";
import authContext from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const userContext = useContext(authContext);

  const navigate = useNavigate();

  const {
    data: products,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["cartProducts"],
    queryFn: () =>
      getProductsCart(userContext.userInfo.id).then((res) => res.data),
  });

  const { mutate } = useMutation({
    mutationKey: ["removeProduct"],
    mutationFn: ({ id }) => removeProductCart(id),
    onSuccess: () => {
      refetch();
    },
  });

  const { mutate: editProduct } = useMutation({
    mutationKey: ["editProductCount"],
    mutationFn: ({ product, value }) => {
      const productInfo = {
        ...product,
        productCount: value,
      };
      editCountOfProductCart(product.id, productInfo);
    },
    onSuccess: () => {
      refetch();
    },
  });

  useEffect(() => {
    let total = 0;
    products?.forEach((product) => {
      total = total + Number(product.price) * Number(product.productCount);
    });
    setTotalPrice(total);
  }, [products]);

  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          { id: 2, to: "/cart", title: "سبد خرید" },
        ]}
      />
      <div className="container">
        <ComponentTextArea blackText="سبد خرید" />
        {isPending && userContext.isLoggedIn ? (
          <>
            <div className="flex justify-center">
              <ScaleLoader color="#d75328" width={10} />
            </div>
          </>
        ) : (
          <>
            {products?.length > 0 && userContext.isLoggedIn ? (
              <>
                <table className="w-full border rounded-md">
                  <thead className="border text-sm sm:text-base">
                    <tr className=" child:border-x-[1px] child:p-3">
                      <th>ردیف</th>
                      <th className=" md:block hidden">عکس</th>
                      <th>اسم</th>
                      <th>قیمت واحد</th>
                      <th>تعداد</th>
                      <th>قیمت کل</th>
                      <th>حذف</th>
                    </tr>
                  </thead>
                  <tbody className="odd:bg-beige-100 sm:text-base text-xs">
                    {products.map((product, index) => (
                      <>
                        <tr
                          key={product.id}
                          className=" child:p-3 text-center child:border-x-[1px] "
                        >
                          <td>{index + 1}</td>
                          <td className="hidden md:flex items-center justify-center ">
                            <img
                              className="h-20 aspect-auto "
                              src={product.cover}
                              alt=""
                            />
                          </td>
                          <td>
                            <Link
                              to={`/product/${product.id}`}
                              className=" hover:text-brown-100"
                            >
                              {product.title}
                            </Link>
                          </td>
                          <td>
                            <span>{product.price.toLocaleString()}</span>
                            <span>تومان</span>
                          </td>
                          <td>
                            <input
                              type="number"
                              min={1}
                              className="bg-beige-100 outline-none text-center p-1 w-10 sm:w-20"
                              value={product.productCount}
                              onChange={(e) =>
                                editProduct({ product, value: e.target.value })
                              }
                            />
                          </td>
                          <td className="">
                            {(
                              product.price * product.productCount
                            ).toLocaleString()}
                            <span>تومان</span>
                          </td>
                          <td>
                            <div
                              onClick={() => {
                                mutate({ id: product.id });
                              }}
                              className=" rounded-full inline-block border border-red-500 transition-all hover:bg-red-500 group"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-red-500 cursor-pointer group-hover:text-white"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18 18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-end mt-6">
                  <div className="w-1/2 ">
                    <h3 className=" font-iranSansBold text-lg mb-1">
                      جمع کل سبد خرید
                    </h3>
                    <div className=" rounded-md border">
                      <div className="p-2 flex justify-around">
                        <span className="font-iranSansMedium">مجموع</span>
                        <p>
                          <span>{totalPrice?.toLocaleString()}</span>
                          تومان
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="buttons mt-4 w-full"
                      onClick={() =>
                        navigate("/checkout", { state: { totalPrice } })
                      }
                    >
                      ادامه جهت تسویه حساب
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <p className="p-3 bg-rose-100 text-center">
                هیچ محصولی در سبد خرید نیست
              </p>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
