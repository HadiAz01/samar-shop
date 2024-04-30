import { Link } from "react-router-dom";

export default function ArticleBox({ article }) {
  return (
    <>
      <div>
        <div>
          <img
            loading="lazy"
            src={article.imgSrc}
            alt="article Image"
            className="h-[250px] object-cover w-full"
          />
        </div>
        <div className="relative h-44">
          <div className="text-white text-sm bg-brown-200 absolute p-2 z-20 right-[10%] top-[-35%]">
            12 خرداد 1402
          </div>
          <div className="absolute flex flex-col justify-between items-start h-52 -top-10 left-0 right-0 mx-auto  border-2 w-11/12 p-6 bg-white">
            <h3 className="font-iranSansBold mb-4 md:text-lg text-base line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm md:leading-7 leading-6 line-clamp-2 mb-3 ">
              {article.preface}
            </p>
            <Link
              to={`/articles/${article.id}`}
              className=" text-brown-200 md:hover:bg-orange-100 "
            >
              ادامه مطلب
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
