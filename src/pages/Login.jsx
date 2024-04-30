import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ComponentTextArea from "../components/ComponentTextArea";
import { useForm } from "react-hook-form";
import { loginUser } from "../Services/Axios/Requests/Users";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import authContext from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const userContext = useContext(authContext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",

    defaultValues: {
      userName: userContext.userInfo?.userName,
      password: userContext.userInfo?.password,
    },
  });

  const formSubmit = (user) => {
    loginUser(user).then((res) => {
      res.data.length > 0
        ? Swal.fire({
            icon: "success",
            title: "اطلاعات به درستی وارد شد",
            toast: true,
            position: "top-start",
            timer: 2500,
            timerProgressBar: true,
            showConfirmButton: false,
            willOpen: () => {
              localStorage.setItem(
                "user",
                JSON.stringify({ accessToken: res.data[0].token })
              );
            },
          }).then((result) => {
            result.dismiss && navigate("/");
          })
        : Swal.fire({
            icon: "error",
            title: "چنین کاربری وجود ندارد",
            toast: true,
            position: "top-start",
            timer: 2500,
            timerProgressBar: true,
            showConfirmButton: false,
          });
    });
    reset();
  };

  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          { id: 2, to: "/login", title: "ورود" },
        ]}
      />
      <div className="container ">
        <ComponentTextArea blackText="ورود به سایت" />
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(formSubmit)}
            className=" flex flex-col gap-4 border p-8 shadow-center-sm rounded-md items-center md:w-1/2 w-full"
          >
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="userName">نام کاربری</label>
              <input
                {...register("userName", {
                  required: "ثبت نام کاربری الزامی است",
                })}
                id="userName"
                type="text"
                className=" outline-none bg-beige-100 p-3 shadow-inset-sm rounded-md transition-all focus:bg-zinc-100 focus:scale-[1.01] focus:shadow-focus-input"
              />
              {errors?.userName ? (
                <p className="text-orange-300 p-1">{errors.userName.message}</p>
              ) : (
                <div className="h-8"></div>
              )}
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="password">رمز عبور</label>
              <input
                {...register("password", {
                  required: "ثبت رمز عبور الزامی است",
                })}
                id="password"
                type="password"
                className=" outline-none bg-beige-100 p-3 shadow-inset-sm rounded-md transition-all focus:bg-zinc-100 focus:scale-[1.01] focus:shadow-focus-input"
              />
              {errors?.password ? (
                <p className="text-orange-300 p-1">{errors.password.message}</p>
              ) : (
                <div className="h-8"></div>
              )}
            </div>
            <div className="flex gap-8 items-center w-full">
              {isValid ? (
                <button className="buttons w-5/12" type="submit">
                  ورود
                </button>
              ) : (
                <button
                  className="buttons-disable w-5/12 "
                  type="submit"
                  disabled
                >
                  ورود
                </button>
              )}
              <Link to="/register" className=" hover:text-brown-200">
                ثبت نام کنید
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
