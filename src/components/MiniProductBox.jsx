
import { Link } from "react-router-dom";
import addComma from "../utilities/AddCommaToNumber";

export default function MiniProductBox({ product }) {
  return (
    <>
      <Link
        to={`/product/${product.id}`}
        className="flex gap-2 hover:bg-beige-100"
      >
        <div className="w-[100px] h-[100px] shrink-0">
          <img src={product.src} alt="" className="object-cover" />
        </div>
        <div className="flex flex-col justify-around">
          <h3>{product.title}</h3>
          <div className="flex items-center gap-1 justify-start text-sm text-brown-200">
            {product.discount !== "No" ? (
              <>
                <div className="decoration-trough">
                  <span>{addComma(product.price)}</span>
                  <span>تومان</span>
                </div>
                <span>{addComma(product.discount)}</span>
                <span>تومان</span>
              </>
            ) : (
              <>
                <span>{addComma(product.price)}</span>
                <span>تومان</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}
