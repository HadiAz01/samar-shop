import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useArticle from "../hooks/useArticle";
import { ScaleLoader } from "react-spinners";

export default function ArticleInfo() {
  const id = useParams().articleId;

  const { data, isPending } = useArticle(id);

  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          { id: 2, to: "/article-info", title: data?.title },
        ]}
      />
      <div className="container">
        {isPending ? (
          <>
            <div className="flex justify-center">
              <ScaleLoader color="#d75328" width={10} />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center mt-10">
              <img src={data?.imgSrc} alt="" />
            </div>
            <div
              className=" mt-10"
              dangerouslySetInnerHTML={{ __html: data?.text }}
            ></div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
