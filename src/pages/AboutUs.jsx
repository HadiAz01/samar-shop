import Header from "../components/Header";
import Footer from "../components/Footer";
import ComponentTextArea from "../components/ComponentTextArea";
import Breadcrumb from "../components/Breadcrumb";

export default function AboutUs() {
  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          { id: 2, to: "/about-us", title: "درباره ما" },
        ]}
      />
      <div className="container">
        <ComponentTextArea blackText="درباره ما" />
        <div>
          <img src="/images/about-us-banner.webp" alt="apartment" />
        </div>
        <div>
          <div className="flex justify-center items-center my-10">
            <h3 className="sub-text font-iranSansMedium text-lg">
              شرکت دکور منزل ثمر
            </h3>
          </div>
          <p className="leading-7">
            با ما، به دنیایی از زیبایی و استحکام دسترسی پیدا کنید. شرکت مبلمان و
            دکوراسیون، به عنوان یک نام معتبر در عرصه طراحی و تولید مبلمان و
            امکانات دکوراسیونی، در زمینه ایجاد فضاهای زیبا و کارآمد، بهترین
            خدمات را ارائه می‌دهد.
          </p>
          <p className="leading-7">
            ما با تکیه بر سال‌ها تجربه، خلاقیت بی‌پایان و توانمندی‌های ماهرانه
            در زمینه طراحی و تولید، به شما ارائه می‌دهیم:
          </p>
          <p className="leading-7">
            <strong>تنوع محصولات:</strong> مبلمان و دکوراسیونی که با آنها کار
            می‌کنیم، شامل طیف گسترده‌ای از سبک‌ها، مدل‌ها و رنگ‌هاست. هرچه
            نیازها و سلیقه‌های شما متنوع‌تر باشد، ما بهترین گزینه‌ها را برای شما
            فراهم می‌کنیم.
          </p>
          <p className="leading-7">
            <strong>کیفیت بالا:</strong> ما به استفاده از مواد اولیه با کیفیت
            بالا و استفاده از فناوری‌های پیشرفته در تولید مبلمان و امکانات
            دکوراسیونی تازه و مدرن متعهد هستیم. هدف ما، ارائه محصولاتی با کیفیت
            برتر و ماندگاری بالا برای رضایت شماست.
          </p>
          <ul className="leading-7">
            <li className="flex items-center gap-2 ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-brown-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span>فروش مبلمان و لوازم چوبی منزل</span>
            </li>
            <li className="flex items-center gap-2 ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-brown-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span>طراحی و سفارشی سازی وسایل</span>
            </li>
            <li className="flex items-center gap-2 ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-brown-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span>تعمیرات و ساخت انواع مبلمان</span>
            </li>
            <li className="flex items-center gap-2 ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-brown-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </span>
              <span>مشاوره و اجرای دکوراسیون داخلی</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
