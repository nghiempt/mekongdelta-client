"use client";

import { URL } from "@/constant/url";
import React, { useEffect, useState } from "react";

export default function Home({ translate }: { translate: any }) {

  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="w-full lg:w-3/4 flex flex-col justify-center items-center pb-10 pt-2">
      <div className="w-full flex justify-center items-center relative">
        <img src={URL.BANNER} alt="logo" className="w-full lg:rounded-md" />
        <div className="absolute top-10 left-10">
          <h1 className="text-[12px] lg:text-[16px] text-white">Welcome to Hung Thinh</h1>
          <h1 className="text-[30px] lg:text-[40px] text-white font-bold">MEKONG DELTA</h1>
        </div>
      </div>
    </div>
  );
}
