import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ComponentTextArea from "../components/ComponentTextArea";
import ArticleBox from "../components/ArticleBox";
import useArticles from "../hooks/useArticles";

export default function DecorationJournal() {
  const { data } = useArticles();

  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          { id: 2, to: "/articles", title: "مقالات دکوراسیون" },
        ]}
      />
      <div className="container">
        <ComponentTextArea blackText="مجله دکوراسیون" />
        <div className="leading-7">
          <p>
            مقالات آموزشی: این بخش شامل مقالاتی درباره روش‌ها و تکنیک‌های
            دکوراسیون است که به خوانندگان کمک می‌کند مهارت‌های لازم برای طراحی
            داخلی را بیاموزند. این مقالات می‌توانند شامل راهنمایی‌های طراحی فضا،
            انتخاب رنگ و بافت، استفاده از نورپردازی مناسب و تزیینات جزئی باشند.
          </p>
          <p>
            طرح‌ها و ایده‌ها: این بخش می‌تواند به خوانندگان نمونه‌هایی از
            طرح‌های دکوراسیون داخلی را به ارمغان بیاورد. شامل تصاویر و توصیف‌های
            مربوط به انواع استایل‌های دکوراسیون از جمله کلاسیک، مدرن، روستایی،
            صنعتی و غیره است.
          </p>
          <p>
            ترند‌ها و اخبار دکوراسیون: این بخش می‌تواند به خوانندگان اخبار و
            ترندهای جدید در دنیای دکوراسیون را ارائه دهد…..
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
          {data?.map((article) => (
            <>
              <ArticleBox key={article.id} article={article} />
            </>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
