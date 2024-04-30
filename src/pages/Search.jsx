import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import { useLocation } from "react-router-dom";
import ComponentTextArea from "../components/ComponentTextArea";
import SearchBox from "../components/SearchBox";

export default function Search() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          { id: 2, to: "", title: "جستجو" },
        ]}
      />
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
          <div>
            <ComponentTextArea blackText="نتایج جستجو در محصولات" />
            {location.state.searchProduct.map((product) => (
              <>
                <SearchBox name="product" searchItem={product} />
              </>
            ))}
            {location.state.searchProduct.length === 0 && (
              <p className=" bg-rose-100 p-3 text-center">
                هیچ محصولی یافت نشد
              </p>
            )}
          </div>
          <div>
            <ComponentTextArea blackText="نتایج جستجو در مقالات" />
            {location.state.searchArticle.map((article) => (
              <>
                <SearchBox name="article" searchItem={article} />
              </>
            ))}
            {location.state.searchArticle.length === 0 && (
              <p className=" bg-rose-100 p-3 text-center">
                هیچ مقاله ای یافت نشد
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
