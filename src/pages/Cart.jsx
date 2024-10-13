import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, addToCart, getTotalAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart mt-16">
      <div className="cart_items">
        <div className="cart_items_title font-medium text-lg ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart_items_title cart_items_item my-4">
                  <img className="w-20 rounded-lg" src={item.image} />
                  <p>{item.name}</p>
                  <p>{item.price} $</p>
                  <div className="qty_btn flex gap-2 items-center">
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="bg-[#f1731e] rounded-full text-2xl px-2 py-[2px] text-center text-black font-extrabold border-none"
                    >
                      -
                    </button>
                    <p className="font-bold">{cartItems[item._id]}</p>
                    <button
                      onClick={() => addToCart(item._id)}
                      className="bg-[#f1731e] rounded-full text-xl px-[6px] py-1 text-black font-extrabold border-none"
                    >
                      +
                    </button>
                  </div>

                  <p>{item.price * cartItems[item._id]} $</p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="cross_icon px-2 py-2 rounded-xl bg-slate-100 text-black text-center hover:text-gray-50 hover:bg-slate-500 transition duration-150 border-none outline-none"
                  >
                    remove
                  </button>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart_bottom mt-8 flex items-start gap-8">
        <div className="cart_total w-[50%] ">
          <h2 className="font-bold text-[1.4rem]">Cart details</h2>
          <div className="inner_cart mt-10 w-[80%]">
            <div className="smol cart_total_details flex items-center text-lg justify-between">
              <p>Subtotal</p>
              <p>$ {getTotalAmount()}</p>
            </div>
            <hr className="my-3" />
            <div className="smol cart_total_details text-lg flex items-center justify-between">
              <p>Delivery fee</p>
              <p>$ {getTotalAmount() == 0 ? 0 : 2}</p>
            </div>
            <hr className="my-3" />
            <div className="smol cart_total_details text-lg flex items-center justify-between font-bold">
              <p>Total</p>
              <p>$ {getTotalAmount() == 0 ? 0 : getTotalAmount() + 2}</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="bg-[#f1731e] px-5 py-2 mt-6 rounded-md hover:bg-gray-500 transition duration-150"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart_promocode w-[50%] mt-10 flex-1">
          <div className="smol text-lg">
            <p>If you have a promocode, Enter here:</p>
            <div className="promo_input mt-2 bg-gray-200 flex items-center justify-between rounded-md">
              <input
                className="smol px-4 py-2 text-lg text-black bg-transparent border-none outline-none"
                type="text"
                placeholder="promocode"
              />
              <button className="smol bg-[#f1731e] text-lg px-6 py-2 border-none outline-none rounded-md">
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
