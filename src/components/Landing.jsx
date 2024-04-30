import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Landing() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="relative ">
        <img src="/images/slider1.webp" />
        <div className="absolute flex flex-col sm:gap-4 gap-2 z-10 sm:top-1/4 top-[5%] right-9 my-auto">
          <h2 className="font-iranSansBold sm:text-xl text-lg">
            تخفیف ویژه برای اولین خرید از شرکت ما
          </h2>
          <p className=" sm:max-w-96 max-w-64 text-sm ">
            هرگونه سوال یا استفاده از خدمات ما، تماس با تیم پشتیبانی ما راحت‌تر
            از همیشه است. به امید دیدار شما در فروشگاه ما!
          </p>
          <Link
            to="/contact-us"
            className="buttons sm:w-40 btn-border xs:w-32 w-24 sm:text-base text-sm"
          >
            مشاوره رایگان
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative ">
        <img src="/images/slider2.jpg" />
        <div className="absolute flex flex-col sm:gap-4 gap-2 z-10 sm:top-1/4 top-[5%] right-9 my-auto">
          <h2 className="font-iranSansBold sm:text-xl text-lg">
            لیست خدمات دکوراسیون ثمر
          </h2>
          <ul className=" sm:max-w-96 max-w-64 text-sm ">
            <li>طراحی و اجرای دکوراسیون داخلی</li>
            <li>تعمیرات و ساخت مبلمان</li>
            <li>فروش مبلمان و لوازم چوبی</li>
            <li>طراحی و سفارشی سازی وسایل و ...</li>
          </ul>
          <Link
            to="/contact-us"
            className="buttons sm:w-40 btn-border xs:w-32 w-24 sm:text-base text-sm"
          >
            تماس با ما
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
