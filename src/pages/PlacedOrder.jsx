import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const PlacedOrder = () => {
  const { getTotalAmount } = useContext(StoreContext);

  return (
    <div className="place_order_page w-full py-14">
      <form className="place_order flex flex-col md:flex-row items-start w-full mx-auto px-0 md:px-12 justify-around gap-8 md:gap-16 md:mt-10">
        <div className="place_order_left w-full md:w-[80%] ">
          <h1 className="font-medium text-2xl mb-8 md:mb-14">
            Delivery Information
          </h1>
          <div className="multi_fields flex gap-3">
            <input className="" type="text" placeholder="First name" />
            <input className="" type="text" placeholder="Last name" />
          </div>
          <input className="" type="email" placeholder="Email address" />
          <input className="" type="text" placeholder="Street" />
          <div className="multi_fields flex gap-3">
            <input className="" type="text" placeholder="City" />
            <input className="" type="text" placeholder="State" />
          </div>
          <div className="multi_fields flex gap-3">
            <input className="" type="text" placeholder="Zip code" />
            <input className="" type="text" placeholder="Country" />
          </div>
          <input className="" type="text" placeholder="Phone number" />
        </div>
        <div className="place_order_right w-full md:px-12">
          <div className="cart_total">
            <h2 className="font-bold text-[1.4rem]  mb-8 md:mb-14">
              Cart details
            </h2>
            <div className="inner_cart w-full ">
              <div className="smol cart_total_details flex items-center text-lg justify-between">
                <p>Subtotal</p>
                <p>$ {getTotalAmount()}</p>
              </div>
              <hr className="my-2" />
              <div className="smol cart_total_details text-lg flex items-center justify-between">
                <p>Delivery fee</p>
                <p>$ {getTotalAmount() == 0 ? 0 : 2}</p>
              </div>
              <hr className="my-2" />
              <div className="smol cart_total_details text-lg flex items-center justify-between font-bold">
                <p>Total</p>
                <p>$ {getTotalAmount() == 0 ? 0 : getTotalAmount() + 2}</p>
              </div>
            </div>
            <button className="bg-[#f1731e] px-5 py-2 mt-6 rounded-md hover:bg-gray-500 transition duration-150">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlacedOrder;
