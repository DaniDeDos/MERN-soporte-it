import React from "react";
import { Link, Outlet } from "react-router-dom";

const DropDownLItem = ({ nombre = "item", link = "#" }) => {
  return (
    <>
      <li>
        <Link to={link} className="block px-4 py-2 hover:bg-gray-100">
          {nombre}
        </Link>
      </li>
      <Outlet/>
    </>
  );
};

export default DropDownLItem;
