import { Link } from "react-router-dom";

export default function SearchBox({ searchItem, name }) {
  return (
    <>
      <Link
        to={`/${name === "product" ? "product" : "articles"}/${searchItem.id}`}
        className="flex gap-2 hover:bg-beige-100 mb-3"
      >
        <div className="w-[100px] h-[100px] shrink-0 object-cover">
          <img
            src={name === "product" ? searchItem.src : searchItem.imgSrc}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-around">
          <h3 className=" line-clamp-2">{searchItem.title}</h3>
          <div className="flex items-center gap-1 justify-start text-sm text-brown-200">
            <span>ادامه مطلب</span>
          </div>
        </div>
      </Link>
    </>
  );
}
