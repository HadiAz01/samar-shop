import { useRef } from "react";

export default function Sorting({ data, setFilteredData }) {
  const parentFilterKeyRef = useRef(null);

  const removeActiveFilter = () => {
    [...parentFilterKeyRef.current.children].forEach((element) =>
      element.classList.remove("active-filter")
    );
  };

  const selectFilter = (e) => {
    switch (e.target.dataset.filter) {
      case "cheapest":
        setFilteredData(
          [...data]?.sort((a, b) => Number(a.price) - Number(b.price))
        );
        removeActiveFilter();
        e.target.classList.add("active-filter");
        break;
      case "moreExpensive":
        setFilteredData(
          [...data]?.sort((a, b) => Number(b.price) - Number(a.price))
        );
        removeActiveFilter();
        e.target.classList.add("active-filter");
        break;
      case "discount":
        setFilteredData(data?.filter((item) => item.discount !== "No"));
        removeActiveFilter();
        e.target.classList.add("active-filter");
        break;
      case "nonDiscount":
        setFilteredData(data?.filter((item) => item.discount === "No"));
        removeActiveFilter();
        e.target.classList.add("active-filter");
        break;
      case "default":
        setFilteredData(data);
        removeActiveFilter();
        e.target.classList.add("active-filter");
        break;

      default:
        data;
        break;
    }
  };

  return (
    <>
      <div className="rounded-lg flex flex-wrap md:flex-nowrap md:gap-3 gap-1 bg-beige-100 mt-6 p-4">
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm7 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
              clipRule="evenodd"
            />
          </svg>
          <span>مرتب سازی:</span>
        </div>

        <ul
          ref={parentFilterKeyRef}
          className="flex flex-wrap md:flex-nowrap md:gap-3 gap-1 child:p-2 child:cursor-pointer text-sm md:text-base"
        >
          <li
            onClick={(e) => selectFilter(e)}
            className="active-filter"
            data-filter="default"
          >
            پیش فرض
          </li>
          <li onClick={(e) => selectFilter(e)} data-filter="cheapest">
            ارزانترین
          </li>
          <li onClick={(e) => selectFilter(e)} data-filter="moreExpensive">
            گرانترین
          </li>
          <li onClick={(e) => selectFilter(e)} data-filter="discount">
            تخفیف دار
          </li>
          <li onClick={(e) => selectFilter(e)} data-filter="nonDiscount">
            بدون تخفیف
          </li>
        </ul>
      </div>
    </>
  );
}
