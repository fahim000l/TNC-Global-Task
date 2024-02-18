import { RootStateType } from "@/app/store";
import CartCard from "@/components/cart/CartCard";
import Sub from "@/layouts/Sub";
import React from "react";
import { useSelector } from "react-redux";

const cart = () => {
  const { cart } = useSelector((state: RootStateType) => state.cart);

  return (
    <Sub>
      <div className="w-full grid grid-cols-1 gap-2">
        {cart?.map((item) => (
          <CartCard item={item} />
        ))}
      </div>
    </Sub>
  );
};

export default cart;
