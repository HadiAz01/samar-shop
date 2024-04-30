import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import ComponentTextArea from "../components/ComponentTextArea";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const rand = function () {
    return Math.random().toString(36).slice(2);
  };

  const token = function () {
    return rand() + rand();
  };

  const formSubmit = (user) => {
    user.token = token();
    addUser(user).then((res) => {
      res.status === 201
        ? Swal.fire({
            toast: true,
            icon: "success",
            title: "کاربر با موفقیت اضافه شد",
            showConfirmButton: false,
            timerProgressBar: true,
            position: "bottom-right",
            timer: 3000,
          }).then((result) => {
            result.dismiss && navigate("/login");
          })
        : Swal.fire({
            toast: true,
            icon: "error",
            title: "مشکلی در ثبت اطلاعات وجود دارد",
          });
      return res.data;
    });
    reset();
  };

  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          { id: 2, to: "/register", title: "ثبت نام" },
        ]}
      />
      <div className="container ">
        <ComponentTextArea blackText="ثبت نام" />
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(formSubmit)}
            className=" flex flex-col gap-4 border p-8 shadow-center-sm rounded-md items-center w-full md:w-1/2"
          >
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="userName">نام کاربری</label>
              <input
                {...register("userName", {
                  minLength: { value: 3, message: "نام کاربری کوتاه است" },
                  required: {
                    value: true,
                    message: "ثبت نام کاربری الزامی است",
                  },
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
              <label htmlFor="email">ایمیل</label>
              <input
                {...register("email", {
                  required: { value: true, message: "ثبت ایمیل الزامی است" },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "ایمیل وارد شده اشتباه است",
                  },
                })}
                id="email"
                type="text"
                className=" outline-none bg-beige-100 p-3 shadow-inset-sm rounded-md transition-all focus:bg-zinc-100 focus:scale-[1.01] focus:shadow-focus-input"
              />
              {errors?.email ? (
                <p className="text-orange-300 p-1">{errors.email.message}</p>
              ) : (
                <div className="h-8"></div>
              )}
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="password">رمز عبور</label>
              <input
                {...register("password", {
                  minLength: { value: 4, message: "رمز عبور کوتاه است" },
                  required: {
                    value: true,
                    message: "ثبت رمز عبور الزامی است",
                  },
                })}
                id="password"
                type="text"
                className=" outline-none bg-beige-100 p-3 shadow-inset-sm rounded-md transition-all focus:bg-zinc-100 focus:scale-[1.01] focus:shadow-focus-input"
              />
              {errors?.password ? (
                <p className="text-orange-300 p-1">{errors.password.message}</p>
              ) : (
                <div className="h-8"></div>
              )}
            </div>
            <div className="flex w-full gap-8 items-center">
              {isValid ? (
                <button className="buttons  w-1/2 " type="submit">
                  ثبت نام
                </button>
              ) : (
                <button
                  className="buttons-disable  w-1/2 "
                  type="submit"
                  disabled
                >
                  ثبت نام
                </button>
              )}
              <Link to="/login" className="hover:text-brown-200">
                وارد سایت شوید
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
