import { useForm } from "react-hook-form";
import ComponentTextArea from "../components/ComponentTextArea";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import { addCustomerInfo } from "../Services/Axios/Requests/Customer";

export default function checkout() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const formSubmit = (client) => {
    addCustomerInfo(client).then((res) => res.data);
    reset();
  };

  return (
    <>
      <Header />
      <Breadcrumb
        links={[
          { id: 1, to: "/", title: "صفحه اصلی" },
          { id: 2, to: "/checkout", title: "پرداخت" },
        ]}
      />
      <div className="container">
        <ComponentTextArea blackText="پرداخت" />
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className=" grid sm:grid-cols-2 grid-cols-1  gap-x-10">
            <div className="flex flex-col gap-2">
              <label className=" ms-2" htmlFor="name">
                نام
              </label>
              <input
                {...register("name", { required: "ثبت نام الزامی است" })}
                type="text"
                id="name"
                className=" bg-beige-100 p-2 outline-none rounded-md"
              />
              {errors?.name ? (
                <p className="text-orange-300 p-1">{errors.name.message}</p>
              ) : (
                <div className="h-8"></div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className=" ms-2" htmlFor="family">
                نام خانوادگی
              </label>
              <input
                {...register("family", {
                  required: "ثبت نام خانوادگی الزامی است",
                })}
                type="text"
                id="family"
                className=" bg-beige-100 p-2 outline-none rounded-md"
              />
              {errors?.family ? (
                <p className="text-orange-300 p-1">{errors.family.message}</p>
              ) : (
                <div className="h-8"></div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className=" ms-2" htmlFor="province">
                استان
              </label>
              <input
                {...register("province", { required: "ثبت استان الزامی است" })}
                type="text"
                id="province"
                className=" bg-beige-100 p-2 outline-none rounded-md"
              />
              {errors?.province ? (
                <p className="text-orange-300 p-1">{errors.province.message}</p>
              ) : (
                <div className="h-8"></div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className=" ms-2" htmlFor="city">
                شهر
              </label>
              <input
                {...register("city", { required: "ثبت شهر الزامی است" })}
                type="text"
                id="city"
                className=" bg-beige-100 p-2 outline-none rounded-md"
              />
              {errors?.city ? (
                <p className="text-orange-300 p-1">{errors.city.message}</p>
              ) : (
                <div className="h-8"></div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className=" ms-2" htmlFor="postalCode">
                کدپستی
              </label>
              <input
                {...register("postalCode", {
                  required: "ثبت کدپستی الزامی است",
                })}
                type="text"
                id="postalCode"
                className=" bg-beige-100 p-2 outline-none rounded-md"
              />
              {errors?.postalCode ? (
                <p className="text-orange-300 p-1">
                  {errors.postalCode.message}
                </p>
              ) : (
                <div className="h-8"></div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className=" ms-2" htmlFor="address">
                آدرس
              </label>
              <input
                {...register("address", { required: "ثبت آدرس الزامی است" })}
                type="text"
                id="address"
                className=" bg-beige-100 p-2 outline-none rounded-md"
              />
              {errors?.address ? (
                <p className="text-orange-300 p-1">{errors.address.message}</p>
              ) : (
                <div className="h-8"></div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className=" ms-2" htmlFor="email">
                ایمیل
              </label>
              <input
                {...register("email")}
                type="text"
                id="email"
                className=" bg-beige-100 p-2 outline-none rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className=" ms-2" htmlFor="phone">
                شماره تلفن
              </label>
              <input
                {...register("phone")}
                type="text"
                id="phone"
                className=" bg-beige-100 p-2 outline-none rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label className=" ms-2 mb-2" htmlFor="desc">
              {" "}
              توضیحات
            </label>
            <textarea
              {...register("desc")}
              className=" bg-beige-100 p-2 outline-none rounded-md"
              id="desc"
              rows="3"
            ></textarea>
          </div>
          {isValid ? (
            <button className=" buttons mt-4 xs:w-1/4" type="submit">
              ثبت سفارش
            </button>
          ) : (
            <button
              className="buttons-disable mt-4 xs:w-1/4 "
              type="submit"
              disabled
            >
              ثبت سفارش
            </button>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
}
