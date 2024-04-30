import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pagination({ dataLength, ItemsCount, link }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    return () => {
      setPage(1);
    };
  }, []);

  const pageCount = Math.ceil(dataLength / ItemsCount);
  const pageCountArray = Array(pageCount).fill("");

  return (
    <>
      {pageCount > 1 ? (
        <div className="flex justify-center w-full mt-5">
          <ul className="pagination flex gap-2 justify-center ltr child:border child:rounded-sm child:shadow-center-sm">
            {page > 1 ? (
              <li>
                <Link
                  className="page-link w-8 h-8 flex justify-center items-center"
                  to={`${link}/${page - 1}`}
                  onClick={() => {
                    setPage(page - 1);
                  }}
                >
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  className="page-link w-8 h-8 flex justify-center items-center  pointer-events-none bg-gray-100"
                  to=""
                >
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
            )}

            {pageCountArray.map((item, index) => (
              <>
                <li
                  className={`page-item ${
                    page === index + 1 && "bg-indigo-200"
                  }`}
                >
                  <Link
                    className={`page-link w-8 h-8 flex justify-center items-center`}
                    onClick={() => setPage(index + 1)}
                    to={`${link}/${index + 1}`}
                  >
                    {index + 1}
                  </Link>
                </li>
              </>
            ))}
            {page < Math.ceil(dataLength / ItemsCount) ? (
              <li>
                <Link
                  className="page-link w-8 h-8 flex justify-center items-center "
                  to={`${link}/${page + 1}`}
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  className="page-link w-8 h-8 flex justify-center items-center  pointer-events-none bg-gray-100"
                  to=""
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </>
  );
}
