import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header_content absolute flex flex-col items-start gap-8 ">
        <h2 className=" header_title text-6xl font-medium">
          Order your favourite food here
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          aspernatur possimus minus explicabo suscipit error consequatur quos,
          esse repellendus eaque nobis consectetur odit, commodi pariatur
          fugiat, repudiandae facilis dolore incidunt!
        </p>
        <a href="#explore_menu">
          <button className=" border-none bg-slate-100 text-gray-600 px-8 py-3 rounded-[50px] hover:scale-105 transition duration-200 ease-in-out">
            View Menu
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
