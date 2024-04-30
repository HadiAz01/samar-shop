import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ComponentTextArea from "./ComponentTextArea";
import { useEffect, useState } from "react";
import { getAllLogos } from "../Services/Axios/Requests/Logos";

export default function Brands() {
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    getAllLogos().then((res) => setLogos(res.data));
  }, []);

  return (
    <>
      <div className="container">
        <ComponentTextArea brownText="برندهای" blackText="همکاری" />
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper flex justify-center"
        >
          {logos.map((logo) => (
            <>
              <SwiperSlide key={logo.id}>
                <img src={logo.src} alt={logo.alt} />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
}
