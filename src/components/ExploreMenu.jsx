import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="explore_menu" className="explore_menu flex flex-col gap-8 py-4 px-10">
      <h1 className="title text-4xl font-medium ">Explore our menu</h1>
      <p className="menu_text max-w-[60%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad
        perspiciatis cum porro? Minima accusantium voluptatibus et.
      </p>
      <div className="menu_list flex gap-7 items-center text-center overflow-x-auto">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="menu_list_item "
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
              />
              <p className="mt-2 text-gray-300/80 text-lg cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
