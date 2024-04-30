import { useEffect, useState } from "react";
import ComponentTextArea from "./ComponentTextArea";
import apiRequests from "../Services/Axios/Configs/configs";
import { Link } from "react-router-dom";

export default function Decoration() {
  const [samples, setSamples] = useState([]);
  useEffect(() => {
    apiRequests.get("/decoration").then((res) => setSamples(res.data));
  }, []);
  return (
    <>
      <div className="container">
        <ComponentTextArea
          brownText="نمونه کارهای"
          blackText="طراحی دکوراسیون"
        />
        <div className="sm:grid grid-cols-4 hidden">
          {samples.slice(0, 8).map((sample) => (
            <>
              <img src={sample.src} key={sample.id} alt="" />
            </>
          ))}
        </div>
        <div className="grid sm:hidden grid-cols-3">
          {samples.slice(0, 6).map((sample) => (
            <>
              <img src={sample.src} alt="" key={sample.id} />
            </>
          ))}
        </div>
        <div className=" mt-4 flex justify-center">
          <Link to="/models" className="buttons btn-border">
            مشاهده همه نمونه کارها
          </Link>
        </div>
      </div>
    </>
  );
}
