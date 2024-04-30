import { useState } from "react";
import { useEffect } from "react";

export default function ScrollTopBtn() {
  const [scrollFromTop, setScrollFromTop] = useState(0);

  useEffect(() => {
    let scrollEvent = document.addEventListener("scroll", () => {
      setScrollFromTop(document.documentElement.scrollTop);
    });

    return () => removeEventListener("scroll", scrollEvent);
  }, [scrollFromTop]);

  const scrollToZero = () => {
    const decreaseScroll = setInterval(() => {
      if (document.documentElement.scrollTop > 1) {
        document.documentElement.scrollTop =
          document.documentElement.scrollTop - 20;
      } else {
        clearInterval(decreaseScroll);
      }
    }, 1);
  };

  return (
    <div
      className={` rounded-full bg-white xs:w-12 xs:h-12 w-10 h-10 fixed bottom-5 right-5 ${
        scrollFromTop > 400 ? "flex" : "hidden"
      }   items-center justify-center shadow-center-lg z-30 cursor-pointer`}
      onClick={scrollToZero}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-brown-200"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
}
