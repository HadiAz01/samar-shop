import ComponentTextArea from "./ComponentTextArea";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import ArticleBox from "./ArticleBox";
import useArticles from "../hooks/useArticles";
import { ScaleLoader } from "react-spinners";

export default function Articles() {
  const { data, isPending } = useArticles();

  return (
    <>
      <div className="container">
        <ComponentTextArea brownText="اخبار و" blackText="مقالات" />
        <Swiper
          spaceBetween={10}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
            el: ".paginationPlace",
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {data?.map((article) => (
            <>
              {isPending ? (
                <div className="flex justify-center">
                  <ScaleLoader color="#d75328" width={10} />
                </div>
              ) : (
                <SwiperSlide key={article.id}>
                  <ArticleBox article={article} />
                </SwiperSlide>
              )}
            </>
          ))}
        </Swiper>
        <div className="paginationPlace flex justify-center gap-2 mt-4"></div>
      </div>
    </>
  );
}
