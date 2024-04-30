import Articles from "../components/Articles";
import Brands from "../components/Brands";
import Decoration from "../components/Decoration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import LastProduct from "../components/LastProduct";
import Preview from "../components/Preview";
import Products from "../components/Products";

export default function Index() {
  return (
    <>
      <Header />
      <Landing />
      <Preview />
      <LastProduct />
      <Products />
      <Brands />
      <Articles />
      <Decoration />
      <Footer />
    </>
  );
}
