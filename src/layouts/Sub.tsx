import React from "react";
import { Divider, Stack } from "@mui/material";
import Header from "@/components/Main/Header";
import SideNav from "@/components/Main/SideNav";
import BottomNav from "@/components/Main/BottomNav";

interface props {
  children: React.ReactNode;
}

const Sub = ({ children }: props) => {
  return (
    <main className={`w-full min-h-screen`}>
      <Header />
      <Stack spacing={2} direction="row" className="my-5">
        <SideNav />
        <div className="lg:divider lg:divider-horizontal hidden"></div>
        {children}
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

export default Sub;
