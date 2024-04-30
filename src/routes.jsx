import AboutUs from "./pages/AboutUs"
import ArticleInfo from "./pages/ArticleInfo"
import Cart from "./pages/Cart"
import CommonQuestions from "./pages/CommonQuestions"
import ContactUS from "./pages/ContactUS"
import DecorationJournal from "./pages/DecorationJournal"
import Index from "./pages/Index"
import Login from "./pages/Login"
import Models from "./pages/Models"
import Product from "./pages/Product"
import ProductCategory from "./pages/ProductCategory"
import Register from "./pages/Register"
import Shop from "./pages/Shop"
import ProductsGroup from "./pages/productsGroup"
import CHeckout from "./pages/CHeckout"
import Search from "./pages/Search"
import NotFound from "./components/NotFound"
import Editor from "./pages/Editor"

const routes=[
{path:'/' , element: <Index/>},
{path:'/about-us' , element: <AboutUs/>},
{path:'/articles' , element: <DecorationJournal/>},
{path:'/models' , element: <Models/>},
{path:'/questions' , element: <CommonQuestions/>},
{path:'/contact-us' , element: <ContactUS/>},
{path:'/shop/:page' , element: <Shop/>},
{path:'/articles/:articleId' , element:<ArticleInfo/> },
{path:'/product-category/:category/:page' , element:<ProductCategory/>},
{path:'/product-category/:category/:group/:page' , element:<ProductsGroup/>},
{path:'/product/:id' , element:<Product/>},
{path:'/login' , element:<Login/>},
{path:'/register' , element:<Register/>},
{path:'/cart' , element:<Cart/>},
{path:'/checkout' , element:<CHeckout/>},
{path:'/search' , element:<Search/>},
{path:'*' , element:<NotFound/>},
{path:'/editor' , element:<Editor/>},

]

export default routes