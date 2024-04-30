import React, { useEffect, useState } from "react";
import MiniProductBox from "./MiniProductBox";
import {
  getAllClocks,
  getAllFigures,
} from "../Services/Axios/Requests/Products";

export default function Products() {
  const [clocks, setClocks] = useState([]);
  const [figures, setFigures] = useState([]);

  useEffect(() => {
    getAllClocks().then((res) => setClocks(res.data));
    getAllFigures().then((res) => setFigures(res.data));
  }, []);
  return (
    <>
      <div className="bg-beige-200 mt-16 py-6">
        <div className="container flex gap-6 ">
          <div className="hidden lg:block w-1/3 h-[570px] shrink-0">
            <img
              src="/images/tree-on-the-wall.jpg"
              alt="tree-on-the-wall"
              className="h-full object-cover"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-3 ">
            <div>
              <h3 className="text-lg font-iranSansMedium">ساعت های لوکس</h3>
              <span className="h-1 rounded-full w-1/6 bg-brown-200 inline-block my-4"></span>
              <div className="flex flex-col gap-6">
                {clocks.map((clock) => (
                  <MiniProductBox key={clock.id} product={clock} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-iranSansMedium">
                مجسمه های دکوراتیو
              </h3>
              <span className="h-1 rounded-full w-1/6 bg-brown-200 inline-block my-4"></span>
              <div className="flex flex-col gap-6">
                {figures.slice(1, 5).map((figure) => (
                  <MiniProductBox key={figure.id} product={figure} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
