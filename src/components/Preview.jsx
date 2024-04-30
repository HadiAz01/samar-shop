import ComponentTextArea from "./ComponentTextArea";
import { Link } from "react-router-dom";

export default function Preview() {
  return (
    <>
      <ComponentTextArea brownText="طراحی زیبا" blackText="و فوق العاده" />
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 gap-y-20">
          <div className="relative w-1/2 md:w-full">
            <div className="bg-beige-100 rounded-md w-full h-28 md:h-48"></div>
            <div className="absolute flex justify-center left-0 right-0 -top-4 md:h-64 h-48  mx-auto">
              <img loading="lazy" src="/images/tab-1.webp" alt="" />
            </div>
          </div>
          <div className="relative w-1/2 md:w-full">
            <div className="bg-beige-100 rounded-md w-full h-28 md:h-48"></div>
            <div className="absolute flex justify-center left-0 right-0 -top-4 md:h-64 h-48  mx-auto">
              <img loading="lazy" src="/images/tab-2.webp" alt="" />
            </div>
          </div>
          <div className="relative w-1/2 md:w-full ">
            <div className="bg-beige-100 rounded-md w-full h-28 md:h-48"></div>
            <div className="absolute flex justify-center left-0 right-0 -top-4 md:h-64 h-48 mx-auto">
              <img
                loading="lazy"
                src="/images/mobl2.webp"
                alt=""
                className="h-full"
              />
            </div>
          </div>
        </div>
        <div className="">
          <ComponentTextArea brownText="لیست خدمات" blackText="و محصولات" />
          <div className="flex flex-col md:flex-row gap-4 ">
            <div className="bg-sofa border border-4 border-black  overflow-hidden rounded-md md:w-5/12 lg:w-4/12">
              <img loading="lazy" src="/images/sofa.webp" alt="sofa" />
            </div>
            <div className="md:w-7/12 lg:w-5/12">
              <div className="font-iranSansMedium text-lg">
                <h3>لیست خدمات</h3>
                <h3>شرکت دکور منزل ثمر</h3>
              </div>
              <span className="h-1 rounded-full w-1/6 bg-brown-200 inline-block"></span>
              <div>
                <p>
                  کیفیت بالا در تمامی مراحل تولید از جمله انتخاب مواد اولیه،
                  فرآیند تولید و کنترل کیفی، برای ما اولویت است.
                </p>
                <p>
                  ما از بهترین مواد اولیه استفاده می‌کنیم تا محصولاتی با دوام و
                  قابل اعتماد را تولید کنیم. همچنین، تیم کنترل کیفیت ما با انجام
                  بازرسی‌های دقیق در تمامی مراحل تولید، از استانداردهای بین
                  المللی را رعایت می‌کند.
                </p>
              </div>
              <ul>
                <li className="flex gap-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-brown-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  فروش مبلمان و لوازم چوبی منزل
                </li>
                <li className="flex gap-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-brown-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  طراحی و سفارشی سازی وسایل
                </li>
                <li className="flex gap-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-brown-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  تعمیرات و ساخت انواع مبلمان
                </li>
                <li className="flex gap-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-brown-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  مشاوره و اجرای دکوراسیون داخلی
                </li>
              </ul>
            </div>
            <div className="lg:w-3/12 md:hidden lg:block">
              <div className="font-iranSansMedium text-lg">
                <h3>لیست خدمات</h3>
                <h3>شرکت دکور منزل ثمر</h3>
              </div>
              <span className="h-1 rounded-full w-1/6 bg-brown-200 block mt-3"></span>
              <div>
                <Link
                  to={"#"}
                  className="bg-[url('/images/bgNav/maserati.jpg')] rounded-md mt-4 inline-block text-lg text-white font-iranSansBold flex items-center justify-center py-3 "
                >
                  پارچه مبلی مازراتی
                </Link>
                <Link
                  to={"#"}
                  className="bg-[url('/images/bgNav/Leather1.jpeg')] rounded-md mt-4 inline-block text-lg text-white font-iranSansBold flex items-center justify-center py-3 "
                >
                  پارچه مبلی چرم مصنوعی
                </Link>
                <Link
                  to={"#"}
                  className="bg-[url('/images/bgNav/woody.jpg')] rounded-md mt-4 inline-block text-lg text-white font-iranSansBold flex items-center justify-center py-3 "
                >
                  مبل چوبی
                </Link>
                <Link
                  to={"#"}
                  className="bg-[url('/images/bgNav/velvet1.jpg')] rounded-md mt-4 inline-block text-lg text-white font-iranSansBold flex items-center justify-center py-3 "
                >
                  پارچه مبلی مخمل پلی استر
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
