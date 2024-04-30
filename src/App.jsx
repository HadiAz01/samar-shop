import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { getUserInfo } from "./Services/Axios/Requests/Users";
import { useEffect, useState } from "react";
import authContext from "./context/AuthContext";
import ScrollTopBtn from "./components/ScrollTopBtn";

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = JSON.parse(localStorage.getItem("user"))?.accessToken;

  useEffect(() => {
    getUserInfo(token).then((res) => {
      setUserInfo(res.data[0]);
      res.data.length > 0 ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });
  }, [token, isLoggedIn]);

  const queryClient = new QueryClient();
  const router = useRoutes(routes);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <authContext.Provider value={{ userInfo, isLoggedIn }}>
          {router}
          <ScrollTopBtn />
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-right"
           
           
          />
        </authContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
