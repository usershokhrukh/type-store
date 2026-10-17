"use client";

import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top-profile">
        <img
          width={30}
          height={30}
          className="sidebar__top-pimg"
          src=""
          alt=""
        />
        <p className="sidebar__p-tit">Lorem, ipsum dolor.</p>
      </div>
      <ul className="sidebar__ul">
        <Link className="sidebar__link sidebar__link-active" href={"/products"}>
          <li className="sidebar__li ">Products</li>
        </Link>
        <Link className="sidebar__link" href={"/products"}>
          <li className="sidebar__li">Auth</li>
        </Link>
        <Link className="sidebar__link" href={"/products"}>
          <li className="sidebar__li">Cart</li>
        </Link>
        <Link className="sidebar__link" href={"/products"}>
          <li className="sidebar__li">Users</li>
        </Link>
      </ul>

      <button className="sidebar__exit-b">Exit</button>
    </div>
  );
};

export default Sidebar;
