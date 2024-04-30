import { Link } from "react-router-dom";

export default function Breadcrumb({ links }) {
  return (
    <>
      <div className="bg-beige-100 flex items-center  ">
        {links.map((link, index) => (
          <>
            {links.length !== index + 1 ? (
              <div
                key={link.id}
                className="flex gap-1 breadcrumb__item md:p-5 p-2 xs:text-sm text-xs hover:text-brown-100  "
              >
                <Link to={link.to} className="z-10">
                  {link.title}
                </Link>
              </div>
            ) : (
              <div key={link.id} className=" md:p-5 p-3 xs:text-sm text-xs">
                <span>{link.title}</span>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
}
