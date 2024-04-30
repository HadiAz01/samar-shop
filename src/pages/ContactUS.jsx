import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ComponentTextArea from "../components/ComponentTextArea";

export default function ContactUS() {
  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          { id: 2, to: "/contact-us", title: "تماس با ما" },
        ]}
      />
      <div className="container">
        <ComponentTextArea blackText="تماس با ما" />
        <div className="text-center leading-7 mb-7">
          <p>
            در شرکت مبلمان و دکوراسیون، تمایل داریم تا به شما خدماتی با کیفیت
            عالی و رضایت کامل ارائه دهیم.
          </p>
          <p>
            لذا، هر گونه سوال، نظر، پیشنهاد یا درخواست خاصی دارید، لطفاً با ما
            تماس بگیرید.
          </p>
        </div>
        <div className="flex xs:flex-row flex-col justify-around items-center gap-x-5 gap-y-3 text-sm sm:text-baseر mb-10">
          <div className="shadow-center-sm flex flex-col items-center grow lg:grow-0 lg:w-[252px] gap-3 py-4 rounded-md w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="sm:w-9 sm:h-10 w-6 h-6 text-brown-100"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <span>آدرس شرکت :</span>
            <p>ایران ، تهران</p>
          </div>
          <div className=" shadow-center-sm flex flex-col items-center grow lg:grow-0 lg:w-[252px] gap-3 py-4 rounded-md w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="sm:w-9 sm:h-10 w-6 h-6 text-brown-100"
            >
              <path
                fillRule="evenodd"
                d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span>تماس با ما:</span>
            <p>09123456789</p>
          </div>
          <div className=" shadow-center-sm flex flex-col items-center grow lg:grow-0 lg:w-[252px] gap-3 py-4 rounded-md w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="sm:w-9 sm:h-10 w-6 h-6 text-brown-100"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <span>ایمیل :</span>
            <p>sample@gmail.com</p>
          </div>
        </div>
        <form className="md:text-base text-sm">
          <div className="grid xs:grid-cols-2 grid-cols-1 gap-y-4 gap-x-10">
            <input
              className="bg-beige-100 p-3 outline-none rounded-md"
              type="text"
              placeholder="نام"
            />
            <input
              className="bg-beige-100 p-3 outline-none rounded-md"
              type="text"
              placeholder="نام خانوادگی"
            />
            <input
              className="bg-beige-100 p-3 outline-none rounded-md ltr text-right"
              type="text"
              placeholder="ایمیل"
            />
            <input
              className="bg-beige-100 p-3 outline-none rounded-md"
              type="text"
              placeholder="عنوان پیام"
            />
          </div>
          <textarea
            className="bg-beige-100 my-4 w-full outline-none p-3 rounded-md"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button
            className="p-4 bg-brown-200 hover:bg-button text-white w-1/3 md:w-1/4 rounded-lg"
            type="submit"
          >
            ارسال
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
