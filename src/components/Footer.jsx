import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllArticles } from "../Services/Axios/Requests/Articles";

export default function Footer() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((res) => setArticles(res.data));
  }, []);
  return (
    <>
      <footer className="bg-beige-100 mt-10">
        <div className="container ">
          <div className=" py-6 flex flex-col lg:flex-row lg:justify-between gap-y-4">
            <div className="flex sm:justify-between sm:flex-row flex-col lg:w-[45%] gap-y-4">
              {/* about us */}
              <div className=" sm:max-w-[260px]">
                <h3 className="font-iranSansBold mb-4 ">درباره ما</h3>
                <p className="text-sm">
                  کیفیت بالا در تمامی مراحل تولید از جمله انتخاب مواد اولیه،
                  فرآیند تولید و کنترل کیفی، برای ما اولویت است. ما از بهترین
                  مواد اولیه استفاده می‌کنیم تا محصولاتی با دوام و قابل اعتماد
                  را تولید کنیم….
                </p>
              </div>
              {/* services */}
              <div className="w-auto sm:w-1/3 lg:w-auto">
                <h3 className="font-iranSansBold mb-4 ">خدمات ما</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      to="/shop/1"
                      className="text-sm flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-brown-100"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      فروشگاه
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className="text-sm flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-brown-100"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      درباره ما
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact-us"
                      className="text-sm flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-brown-100"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      تماس با ما
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/models"
                      className="text-sm flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-brown-100"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      نمونه کارها
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/questions"
                      className="text-sm flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-brown-100"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      سوالات متداول
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex sm:justify-between sm:flex-row flex-col lg:w-[45%] gap-y-4">
              {/* new blog */}
              <div>
                <h3 className="font-iranSansBold mb-4 ">نوشته های تازه</h3>
                <ul className="flex flex-col gap-1 text-sm">
                  {articles.slice(0, 5).map((article) => (
                    <>
                      <li key={article.id}>
                        <Link
                          className="hover:text-brown-100"
                          to={`/articles/${article.id}`}
                        >
                          {article.title}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              {/* information contact Us */}
              <div className="w-auto sm:w-1/3 lg:w-auto">
                <h3 className="font-iranSansBold mb-4 ">اطلاعات تماس</h3>
                <div className="child:my-1">
                  <div className="flex  gap-1 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 -rotate-90 text-brown-100"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>تلفن تماس :</span>
                  </div>
                  <p className="text-sm">09123456789</p>
                  <div className="flex  gap-1 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-brown-100"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    <span>ایمیل :</span>
                  </div>
                  <p className="text-sm">info@yourdomain.com</p>
                  <div className="flex  gap-1 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-brown-100"
                    >
                      <path
                        fillRule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>آدرس :</span>
                  </div>
                  <p className="text-sm">ایران، تهران ، لورم ایپسوم…</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 sm:mt-10 sm:py-8 py-6 border-t border-gray-300">
            <p className="flex justify-center items-center text-center text-sm">
              Copyright © 2019-2024 SamarShop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
