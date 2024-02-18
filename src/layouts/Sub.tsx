import React from "react";
import { Divider, Stack } from "@mui/material";
import Header from "@/components/Main/Header";
import SideNav from "@/components/Main/SideNav";

interface props {
  children: React.ReactNode;
}

const Sub = ({ children }: props) => {
  return (
    <main className={`w-full`}>
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
    </main>
  );
};

export default Sub;
