import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ComponentTextArea from "../components/ComponentTextArea";
import { useEffect, useState } from "react";
import apiRequests from "../Services/Axios/Configs/configs";

export default function Models() {
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    apiRequests.get("/decoration").then((res) => setSamples(res.data));
  }, []);
  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          { id: 2, to: "/models", title: "نمونه کارها" },
        ]}
      />
      <div className="container">
        <ComponentTextArea blackText="نمونه کارها" />
        <div className="leading-7">
          <p>
            اگر به دنبال ایده‌های جدید برای طراحی خانهٔ خود هستید یا به دنبال
            مبلمانی منحصر به فرد و با کیفیت بالا برای فضاهای خود می‌گردید،
            می‌توانید از این گالری الهام بگیرید. تصاویر با جزئیات دقیقی از
            جزئیات مبلمان، استفاده از رنگ‌ها و جزئیات دکوراتیو، به شما ایده‌هایی
            جهت خلق فضایی منحصر به فرد و زیبا را می‌دهند.
          </p>
          <p>
            همچنین، در صورت تمایل به سفارش محصولات مشابه یا سفارش سفارشی، تیم ما
            آماده است تا به شما در انتخاب محصولات و طراحی مناسب کمک کند. با ما
            در تماس باشید و از تجربهٔ خریدی شگفت‌انگیز و خلق فضاهای داخلی زیبا
            لذت ببرید.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-1 mt-10">
          {samples.map((sample) => (
            <>
              <img key={sample.id} src={sample.src} alt="" />
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
