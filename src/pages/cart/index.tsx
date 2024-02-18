import { RootStateType } from "@/app/store";
import CartCard from "@/components/cart/CartCard";
import Sub from "@/layouts/Sub";
import React from "react";
import { useSelector } from "react-redux";

const cart = () => {
  const { cart } = useSelector((state: RootStateType) => state.cart);

  return (
    <Sub>
      {cart?.length > 0 ? (
        <div className="w-full grid grid-cols-1 gap-2 min-h-screen">
          {cart?.map((item) => (
            <CartCard item={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen w-full">
          <p className="font-bold text-3xl">Cart is Empty</p>
        </div>
      )}
    </Sub>
  );
};

export default cart;
