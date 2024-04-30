import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authContext from "../context/AuthContext";
import {
  getAllProducts,
  getProductsCart,
} from "../Services/Axios/Requests/Products";
import { useQuery } from "@tanstack/react-query";
import useArticles from "../hooks/useArticles";

export default function Header() {
  const [cartMenuPosition, setCartMenuPosition] = useState("-left-72");
  const [navMenuPosition, setNavMenuPosition] = useState("-right-72");
  const [collapseHeight, setCollapseHeight] = useState("h-0 hidden");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const userContext = useContext(authContext);

  let cartRef = useRef(null);
  let navRef = useRef(null);
  let searchRef = useRef(null);

  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        cartMenuPosition === "left-0" &&
        cartRef.current &&
        !cartRef.current.contains(e.target)
      ) {
        setCartMenuPosition("-left-72");
      }
      if (
        navMenuPosition === "right-0" &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setNavMenuPosition("-right-72");
      }
      if (
        isSearchVisible === true &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);
    document.addEventListener("keydown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
      document.removeEventListener("keydown", checkIfClickedOutside);
    };
  }, [cartMenuPosition, navMenuPosition, isSearchVisible]);

  const toggleMenu = (menu) => {
    if (menu === "cart") {
      if (cartMenuPosition === "left-0") {
        setCartMenuPosition("-left-72");
      } else {
        setCartMenuPosition("left-0");
      }
    } else {
      if (navMenuPosition === "right-0") {
        setNavMenuPosition("-right-72");
      } else {
        setNavMenuPosition("right-0");
      }
    }
  };

  const collapseToggle = () => {
    if (collapseHeight === "h-0 hidden") {
      setCollapseHeight("h-auto");
    } else {
      setCollapseHeight("h-0 hidden");
    }
  };

  const searchToggle = () => {
    if (isSearchVisible === false) {
      searchRef.current.focus();
      setIsSearchVisible(true);
    } else {
      setIsSearchVisible(false);
    }
  };

  const { data: productsCart, refetch: refetchProductsCart } = useQuery({
    queryKey: ["cartProducts"],
    queryFn: () =>
      getProductsCart(userContext.userInfo.id).then((res) => res.data),
  });

  useEffect(() => {
    refetchProductsCart();
  }, [userContext.userInfo?.id]);

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts().then((res) => res.data),
  });

  const { data: articles } = useArticles();

  useEffect(() => {
    let total = 0;
    productsCart?.forEach((product) => {
      total = total + Number(product.price) * Number(product.productCount);
    });
    setTotalPrice(total);
  }, [productsCart]);

  const searchAction = (e) => {
    e.preventDefault();
    const filterProducts = products.filter((product) =>
      product.title.includes(searchValue)
    );
    const filterArticles = articles.filter((article) =>
      article.title.includes(searchValue)
    );
    navigate("/search", {
      state: { searchProduct: filterProducts, searchArticle: filterArticles },
    });
  };

  const logOut = () => {
    localStorage.removeItem("user");
  };

  return (
    <>
      <header className="relative bg-white z-30 shadow-md">
        <div className="w-full px-2.5 flex py-2 gap-y-2 justify-between  md:flex-wrap">
          <div className="flex md:hidden items-center ">
            {/* icon nav in mobile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:text-brown-100 cursor-pointer"
              onClick={() => {
                toggleMenu("nav");
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {/* nav-mobile */}
            <div
              className={`fixed flex md:hidden flex-col gap-y-2 top-0 bottom-0  w-72 text-sm p-3 bg-white shadow-md text-black transition-all delay-100  overflow-x-visible overflow-y-auto z-40 ${navMenuPosition}`}
              ref={navRef}
            >
              {/* close icon */}
              <div
                className="text-start flex justify-end"
                onClick={() => toggleMenu("nav")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 hover:text-brown-100  cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="pt-3">
                <ul className=" child:text-sm child:border-b child:w-full child:p-3.5 flex flex-col items-start justify-start w-full">
                  <li className="flex items-center">
                    {userContext.isLoggedIn ? (
                      <Link
                        to="/login"
                        className=" items-center text-sm gap-0.5 hover:text-brown-100 inline-flex"
                      >
                        {userContext.userInfo.userName}
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className=" items-center text-sm gap-0.5 hover:text-brown-100 inline-flex"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                          />
                        </svg>
                        ورود|ثبت نام
                      </Link>
                    )}
                  </li>
                  <li>
                    <Link to="/" className="hover:text-brown-100">
                      صفحه اصلی
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us" className="hover:text-brown-100">
                      درباره ما
                    </Link>
                  </li>
                  <li>
                    <Link to="/articles" className="hover:text-brown-100">
                      مجله دکوراسیون
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="flex items-center  hover:text-brown-100 h-full"
                      onClick={collapseToggle}
                    >
                      فروشگاه
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </Link>
                    <div
                      className={`${collapseHeight}  translate-y-3 rounded-sm flex flex-col child:p-4 w-full bg-gray-100 text-black divide-y-2 tracking-tighter transition-all delay-100 `}
                    >
                      <Link
                        to="/product-category/decorative/1"
                        className=" relative flex group gap-x-1 items-center  hover:text-brown-100 "
                      >
                        <span className="list-style "></span>
                        وسایل دکوراتیو
                      </Link>

                      <Link
                        to="/product-category/desk/1"
                        className="relative flex group gap-x-1  items-center hover:text-brown-100"
                      >
                        <span className="list-style "></span>
                        میز
                      </Link>
                      <Link
                        to="/product-category/sofa/1"
                        className="relative flex group gap-x-1 items-center hover:text-brown-100"
                      >
                        <span className="list-style "></span>
                        مبل
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/models" className="hover:text-brown-100">
                      نمونه کارها
                    </Link>
                  </li>
                  <li>
                    <Link to="/questions" className="hover:text-brown-100">
                      سوالات متداول
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" className="hover:text-brown-100">
                      تماس با ما
                    </Link>
                  </li>
                </ul>
              </div>
              <form
                className="mt-3 flex justify-between w-full border-2 border-brown-200 bg-zinc-100 p-3 rounded-lg"
                onSubmit={(e) => searchAction(e)}
              >
                <input
                  className="outline-0 bg-zinc-100 "
                  type="text"
                  placeholder="جستجو"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </form>
            </div>
          </div>
          <div className=" lg:w-1/12 md:w-2/12 flex items-center">
            <img className="w-12" src="/images/logo-shop.png" alt="logo" />
          </div>
          <nav className="items-center  md:w-full md:order-1 lg:w-8/12 lg:order-none hidden md:flex border-t lg:border-0 pt-2">
            <ul className="h-full child:text-sm flex items-center justify-between w-full ">
              <li className="">
                <Link to="/" className="hover:text-brown-100 ">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-brown-100">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-brown-100">
                  مجله دکوراسیون
                </Link>
              </li>
              {/* has sub-menu */}
              <li className="relative h-full">
                <Link
                  to="/shop/1"
                  className="flex items-center group hover:text-brown-100 h-full"
                >
                  فروشگاه
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3 group-hover:rotate-180 transition-all "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                  {/* sub-menu */}
                  <div className="absolute invisible opacity-0 translate-y-3 group-hover:visible  group-hover:opacity-100 group-hover:-translate-y-0 top-full right-0 flex flex-col child:p-4 w-44 bg-white text-black shadow-md tracking-tighter rounded  backdrop-blur-sm transition-all delay-100">
                    <Link
                      to="/product-category/decorative/1"
                      className="relative flex group/scoped justify-between items-center  hover:bg-gray-100 "
                    >
                      وسایل دکوراتیو
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                      {/* sub sub-menu */}
                      <div className="absolute invisible opacity-0 translate-y-3 group-hover/scoped:visible  group-hover/scoped:opacity-100 group-hover/scoped:-translate-y-0 top-1/3 right-full flex flex-col child:p-4 w-44 bg-white text-black shadow-md  rounded overflow-hidden backdrop-blur-sm transition-all ">
                        <Link
                          to="/product-category/decorative/nightLight/1"
                          className=" flex justify-between items-center hover:bg-gray-100"
                        >
                          چراغ خواب
                        </Link>
                        <Link
                          to="/product-category/decorative/cushion/1"
                          className=" flex justify-between items-center hover:bg-gray-100"
                        >
                          کوسن
                        </Link>
                        <Link
                          to="/product-category/decorative/lustre/1"
                          className=" flex justify-between items-center hover:bg-gray-100"
                        >
                          لوستر
                        </Link>
                        <Link
                          to="/product-category/decorative/figure/1"
                          className=" flex justify-between items-center hover:bg-gray-100"
                        >
                          مجسمه
                        </Link>
                      </div>
                    </Link>

                    <Link
                      to="/product-category/desk/1"
                      className="relative flex group/desk justify-between items-center hover:bg-gray-100"
                    >
                      میز
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                      <div className="absolute invisible opacity-0 translate-y-3 group-hover/desk:visible  group-hover/desk:opacity-100 group-hover/desk:-translate-y-0 top-1/3 right-full flex flex-col child:p-4 w-44 bg-white text-black shadow-md  rounded overflow-hidden backdrop-blur-sm transition-all ">
                        <Link
                          to="/product-category/desk/writingDesk/1"
                          className=" flex justify-between items-center hover:bg-gray-100"
                        >
                          میز تحریر و اداری
                        </Link>
                        <Link
                          to="/product-category/desk/tvDesk/1"
                          className=" flex justify-between items-center hover:bg-gray-100"
                        >
                          میز تلویزیون
                        </Link>
                      </div>
                    </Link>
                    <Link
                      to="/product-category/sofa/1"
                      className="relative flex group/sofa justify-between items-center hover:bg-gray-100"
                    >
                      مبل
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w- h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                      <div className="absolute invisible opacity-0 translate-y-3 group-hover/sofa:visible  group-hover/sofa:opacity-100 group-hover/sofa:-translate-y-0 top-1/3 right-full flex flex-col child:p-4 w-44 bg-white text-black shadow-md  rounded overflow-hidden backdrop-blur-sm transition-all ">
                        <Link
                          to="/product-category/sofa/steal/1"
                          className=" flex justify-between items-center hover:bg-gray-100"
                        >
                          مبل استیل
                        </Link>
                        <Link
                          to="/product-category/sofa/royal/1"
                          className=" flex justify-between items-center hover:bg-gray-100"
                        >
                          مبل سلطنتی
                        </Link>
                        <Link
                          to="/product-category/sofa/comfortable/1"
                          className=" flex justify-between items-center hover:bg-gray-100"
                        >
                          مبل راحتی
                        </Link>
                      </div>
                    </Link>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/models" className="hover:text-brown-100">
                  نمونه کارها
                </Link>
              </li>
              <li>
                <Link to="/questions" className="hover:text-brown-100">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-brown-100">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center  justify-between lg:w-2/12 md:w-8/12 ">
            {/* search */}

            {/* search in tablet */}
            <form
              className="mt-3 hidden md:flex lg:hidden justify-between md:w-8/12 border-2 border-brown-200  p-2 rounded-full"
              onSubmit={(e) => searchAction(e)}
            >
              <input
                className="outline-0 w-10/12"
                type="text"
                placeholder="جستجو"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </form>
            {/* search icon */}
            <div className="relative ">
              <div className="bg-white rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 shrink-0 hidden lg:block cursor-pointer hover:text-brown-100"
                  onClick={searchToggle}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <form
                className={`absolute flex items-center justify-between z-40 -bottom-14 left-0 rounded-full shadow-md p-2  overflow-hidden bg-beige-100 border border-brown-100 transition-all ${
                  isSearchVisible === true
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
                onSubmit={(e) => searchAction(e)}
              >
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="جستجو..."
                  className=" outline-none  bg-beige-100"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 shrink-0 hidden lg:block cursor-pointer text-brown-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </form>
            </div>
            {/* cart icon */}
            <button className="relative flex group  items-center hover:text-brown-100 h-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-6 h-6 cursor-pointer"
                onClick={() => toggleMenu("cart")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {/* cart-menu */}
              <div className="absolute flex md:group-hover:opacity-100 md:group-hover:visible opacity-0 invisible flex-col gap-y-2 top-full left-0 w-72 text-sm p-3 bg-white shadow-md text-black transition-all delay-100 cursor-auto">
                {productsCart?.length === 0 ? (
                  <h3 className=" bg-rose-100 line-clamp-2 font-iranSansBold p-2 mt-2">
                    هیچ محصولی در سبد خرید وجود ندارد
                  </h3>
                ) : (
                  productsCart?.map((product) => (
                    <>
                      <Link
                        to={`/product/${product.id}`}
                        className="flex gap-x-1 hover:bg-beige-100"
                        key={product.id}
                      >
                        <div className="shrink-0 ">
                          <img
                            className="w-24 object-cover h-24"
                            src={product.cover}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-around">
                          <h3 className="line-clamp-2 font-iranSansBold">
                            {product.title}
                          </h3>
                          <div className="flex items-center">
                            <span>{product.productCount}</span>
                            <span className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4"
                              >
                                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                              </svg>
                              {product.price}تومان
                            </span>
                          </div>
                        </div>
                      </Link>
                    </>
                  ))
                )}

                {/* cart-footer */}
                <div className="flex justify-center items-center bg-beige-100 mt-2 py-2">
                  <h4 className="font-iranSansBold">جمع كل سبد خريد: </h4>
                  <span>{totalPrice} تومان</span>
                </div>
                <div className="flex items-center justify-between text-white">
                  <Link to="/cart" className="buttons w-[48%]">
                    مشاهده سبد خرید
                  </Link>
                  <button
                    onClick={() =>
                      navigate("/checkout", { state: { totalPrice } })
                    }
                    className="buttons w-[48%]"
                  >
                    تسویه حساب
                  </button>
                </div>
              </div>
            </button>
            <span className="w-0.5 h-3/4 bg-zinc-200   hidden lg:inline-block"></span>
            {userContext.isLoggedIn ? (
              <>
                <Link
                  to=""
                  className=" overflow-hidden group/user whitespace-nowrap items-center text-sm gap-0.5 hover:text-brown-100 hidden md:flex max-w-28"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <div className="absolute invisible opacity-0 translate-y-3 group-hover/user:visible  group-hover/user:opacity-100 group-hover/user:-translate-y-0 top-full left-0  flex flex-col child:p-4 w-44 bg-white text-black shadow-md tracking-tighter rounded  backdrop-blur-sm transition-all delay-100 ">
                    <Link
                      to="/editor"
                      className="hover:bg-gray-100 flex justify-between"
                    >
                      اصلاح اطلاعات
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Link>
                    <Link
                      className="hover:bg-gray-100 flex justify-between"
                      onClick={logOut}
                    >
                      خروج
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                        />
                      </svg>
                    </Link>
                  </div>
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className=" items-center text-sm gap-0.5 hover:text-brown-100 hidden md:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                  />
                </svg>
                ورود|ثبت نام
              </Link>
            )}
          </div>
        </div>
        {/* cart-menu-mobile */}
        <div
          className={`fixed flex md:hidden flex-col gap-y-2 top-0 bottom-0 w-72 text-sm p-3 bg-white shadow-md text-black transition-all z-40 delay-100 ${cartMenuPosition}`}
          ref={cartRef}
        >
          <div
            onClick={() => toggleMenu("cart")}
            className="text-start cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:text-brown-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          {productsCart?.length === 0 ? (
            <h3 className=" bg-rose-100 line-clamp-2 font-iranSansBold p-2 mt-2">
              هیچ محصولی در سبد خرید وجود ندارد
            </h3>
          ) : (
            productsCart?.map((product) => (
              <>
                <Link
                  to={`/product/${product.id}`}
                  className="flex gap-x-1 hover:bg-beige-100"
                  key={product.id}
                >
                  <div className="shrink-0 ">
                    <img
                      className="w-24 object-cover h-24"
                      src={product.cover}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-around">
                    <h3 className="line-clamp-2 font-iranSansBold">
                      {product.title}
                    </h3>
                    <div className="flex items-center">
                      <span>{product.productCount}</span>
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                        </svg>
                        {product.price}تومان
                      </span>
                    </div>
                  </div>
                </Link>
              </>
            ))
          )}

          {/* cart-footer */}
          <div className="absolute bottom-5 left-0 right-0 mx-auto p-2">
            <div className="flex justify-center items-center bg-beige-100 mt-2 py-2">
              <h4 className="font-iranSansBold">جمع كل سبد خريد: </h4>
              <span>{totalPrice} تومان</span>
            </div>
            <div className="flex items-center justify-between text-white">
              <Link to="/cart" className="buttons w-[48%]">
                مشاهده سبد خرید
              </Link>
              <button
                onClick={() => navigate("/checkout", { state: { totalPrice } })}
                className="buttons w-[48%]"
              >
                تسویه حساب
              </button>
            </div>
          </div>
        </div>
        {(cartMenuPosition === "left-0" && window.innerWidth < 768) ||
        navMenuPosition === "right-0" ? (
          <div className="overlay overlay--visible"></div>
        ) : (
          <div className="overlay"></div>
        )}
      </header>
    </>
  );
}
