import { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ComponentTextArea from "../components/ComponentTextArea";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getAllQuestions } from "../Services/Axios/Requests/Questions";

export default function CommonQuestions() {
  const [questions, setQuestions] = useState([]);
  const [openAnswerIndex, setOpenAnswerIndex] = useState(-1);

  useEffect(() => {
    getAllQuestions().then((res) => setQuestions(res.data));
  }, []);

  const answerToggle = (index) => {
    setOpenAnswerIndex(index === openAnswerIndex ? -1 : index);
  };

  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          { id: 2, to: "/questions", title: "سوالات متداول" },
        ]}
      />
      <div className="container">
        <ComponentTextArea blackText="سوالات متداول" />
        <div className="leading-7">
          <p>
            به صفحه سوالات متداول فروشگاه آنلاین مبل و دکوراسیون خوش آمدید! در
            این صفحه، سعی کرده‌ایم به برخی از سوالات رایج که ممکن است برای شما
            پیش بیایند، پاسخ دهیم.
          </p>
          <p>
            اگر سوال خاصی در ذهن دارید که در اینجا پاسخی برای آن وجود ندارد، ما
            آماده هستیم تا شما را دریافت کنیم و به بهترین نحو ممکن به آن پاسخ
            دهیم.
          </p>
          <p>
            همچنین، ما تمام تلاش خود را می‌کنیم تا اطلاعات و راهنمایی‌های مفید
            در زمینه دکوراسیون و مبلمان را به شما ارائه دهیم. برای هر گونه سؤال،
            نیاز به راهنمایی یا درخواست اطلاعات بیشتر، لطفاً با ما تماس بگیرید
            یا از طریق فرم تماس با ما در وبسایت ما با ما در ارتباط باشید. از
            انتخاب شما برای خرید از فروشگاه ما سپاسگزاریم و امیدواریم که تجربهٔ
            خریدی راحت و رضایت‌بخش را برای شما فراهم کنیم.
          </p>
        </div>
        <div className="mt-10">
          <div>
            {questions.map((questionAnswer, index) => (
              <>
                <div key={questionAnswer.id} className="">
                  {openAnswerIndex === index ? (
                    <div
                      className="border flex items-center text-brown-100 font-iranSansMedium md:text-lg text-base p-3 cursor-pointer "
                      onClick={() => answerToggle(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      {questionAnswer.question}
                    </div>
                  ) : (
                    <div
                      className="border  flex items-center  font-iranSansMedium md:text-lg text-base p-3 cursor-pointer "
                      onClick={() => answerToggle(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                      </svg>
                      {questionAnswer.question}
                    </div>
                  )}

                  {openAnswerIndex === index ? (
                    <div
                      className={`p-3 border md:max-h-24 max-h-36 opacity-100 font-iranSansUltraLight transition-[max-height,opacity] duration-1000  `}
                    >
                      {questionAnswer.answer}
                    </div>
                  ) : (
                    <div className="opacity-0 max-h-0 font-iranSansUltraLight text-sm md:text-base"></div>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
