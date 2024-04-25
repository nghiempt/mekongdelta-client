"use client";

import React from "react";

export default function Footer({ translate }: { translate: any }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center bg-[#24231D]">
        <div className="w-3/4 flex justify-center items-center text-[#A5A49A] py-20">
          <span>Footer</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-[#1F1E17] py-4">
        <div className="w-3/4 flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between items-center text-[#A5A49A] text-[14px]">
          <div className="flex justify-center items-center">
            <h1>© All Copyright 2024 by Mekong Delta</h1>
          </div>
          <div className="flex justify-center items-center gap-6">
            <h1>Terms of Use</h1>
            <div className="w-[1px] h-[20px] bg-[#A5A49A]"></div>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
