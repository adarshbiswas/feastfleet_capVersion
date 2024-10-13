import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = (props) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food_item w-full m-auto rounded-lg p-3">
      <div className="food_item_img_container">
        <img src={props.image} className="food_item_img w-full rounded-lg" />
      </div>
      <div className="food_item_info flex flex-col gap-2 mt-2">
        <div className="food_item_rating">
          <p className="font-medium text-base">{props.name}</p>
          <img className="mt-1 w-20" src={assets.rating_starts} />
        </div>

        <p className="food_item_desc text-gray-300 text-[15px]">
          {props.description}
        </p>
        <div className="low_items flex items-center justify-between">
          <p className="food_item_price font-medium">{props.price} $</p>

          {!cartItems[props.id] ? (
            <img
              className="add w-8 cursor-pointer"
              onClick={() => addToCart(props.id)}
              src={assets.add_icon_white}
            />
          ) : (
            <div className="item_counter flex items-center gap-2 bg-orange-900 p-1 rounded-3xl cursor-pointer">
              <img
                className="w-8"
                onClick={() => removeFromCart(props.id)}
                src={assets.remove_icon_red}
              />
              <p className="font-medium">{cartItems[props.id]}</p>
              <img
                className="w-8"
                onClick={() => addToCart(props.id)}
                src={assets.add_icon_green}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
