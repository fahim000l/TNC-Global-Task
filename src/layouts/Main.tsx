import BottomNav from "@/components/Main/BottomNav";
import CatNav from "@/components/Main/CatNav";
import Header from "@/components/Main/Header";
import SideNav from "@/components/Main/SideNav";
import { Divider, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

interface props {
  children: React.ReactNode;
}

const Main = ({ children }: props) => {
  const dispatch = useDispatch();

  return (
    <main className={`w-full min-h-screen`}>
      <Header />
      <Stack spacing={2} direction="row" className="my-5">
        <SideNav />
        <div className="lg:divider lg:divider-horizontal hidden"></div>
        {children}
        <div className="lg:divider lg:divider-horizontal hidden"></div>
        <CatNav />
      </Stack>
      {/* <div className="flex justify-evenly my-5">
        <SideNav />
        {children}
        <Divider orientation="vertical" />
        <CatNav />
      </div> */}
      <BottomNav />
    </main>
  );
};

export default Main;
