import CatNav from "@/components/Main/CatNav";
import Header from "@/components/Main/Header";
import SideNav from "@/components/Main/SideNav";
import { Divider, Stack } from "@mui/material";
import React from "react";

interface props {
  children: React.ReactNode;
}

const Main = ({ children }: props) => {
  return (
    <main className={`w-full`}>
      <Header />
      <Stack spacing={2} direction="row" className="my-5">
        <SideNav />
        <div className="divider divider-horizontal "></div>
        {children}
        <div className="divider divider-horizontal "></div>
        <CatNav />
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

export default Main;
