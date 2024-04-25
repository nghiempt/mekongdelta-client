"use client";

import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { URL } from "@/constant/url";

export default function Header({ translate }: { translate: any }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full h-[2px] flex justify-center items-center">
        <div className="w-1/3 h-[2px] bg-blue-200"></div>
        <div className="w-1/3 h-[2px] bg-yellow-200"></div>
        <div className="w-1/3 h-[2px] bg-green-200"></div>
      </div>
      <div className="w-3/4 flex flex-col justify-center items-center">
        <div className="w-full flex flex-col lg:flex-row justify-center items-center py-6">
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start items-center cursor-pointer">
            <img src={URL.LOGO} alt="logo" width={200} />
          </div>

          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row justify-center lg:justify-end items-center mt-4 lg:mt-0">
            <div className="flex justify-center lg:justify-end items-center gap-6 lg:mr-10">
              <div className="w-6 h-6 p-1 flex justify-center items-center bg-gray-200 cursor-pointer rounded-full text-sm">
                <FacebookIcon style={{ fontSize: '16px' }} />
              </div>
              <div className="w-6 h-6 p-1 flex justify-center items-center bg-gray-200 cursor-pointer rounded-full text-sm">
                <FmdGoodIcon style={{ fontSize: '16px' }} />
              </div>
              <div className="w-6 h-6 p-1 flex justify-center items-center bg-gray-200 cursor-pointer rounded-full text-sm">
                <YouTubeIcon style={{ fontSize: '16px' }} />
              </div>
              <div className="w-6 h-6 p-1 flex justify-center items-center bg-gray-200 cursor-pointer rounded-full text-sm">
                <GoogleIcon style={{ fontSize: '16px' }} />
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center p-2 gap-4 mr-2">
              <PhonePausedIcon style={{ color: 'green', fontSize: '36px' }} />
              <div className="flex flex-col justify-center items-start">
                <h1>Call anytime</h1>
                <h1 className="font-semibold">+84 913 745 739</h1>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center p-2 gap-4 mr-2">
              <MarkEmailUnreadIcon style={{ color: 'green', fontSize: '36px' }} />
              <div className="flex flex-col justify-center items-start">
                <h1>Send email</h1>
                <h1 className="font-semibold">contact@mekongdelta</h1>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center p-2 gap-4">
              <FmdGoodIcon style={{ color: 'green', fontSize: '36px' }} />
              <div className="flex flex-col justify-center items-start">
                <h1>Binh Thanh</h1>
                <h1 className="font-semibold">Long My, Hau Giang</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:flex justify-center items-center bg-[rgb(248,247,242)] py-4">
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-3/4 flex justify-start items-center gap-12 text-[16px]">
            <div className="flex justify-center items-center cursor-pointer">
              <h1 className="font-bold">Home</h1>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex justify-center items-center cursor-pointer">
              <h1>About</h1>
            </div>
            <div className="flex justify-center items-center cursor-pointer">
              <h1>Service</h1>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex justify-center items-center cursor-pointer">
              <h1>Project</h1>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex justify-center items-center cursor-pointer">
              <h1>News</h1>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex justify-center items-center cursor-pointer">
              <h1>Shop</h1>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex justify-center items-center cursor-pointer">
              <h1>Contact</h1>
            </div>
          </div>
          <div className="w-1/4 flex justify-end items-center gap-10">
            <div className="w-[1px] h-[30px] bg-gray-200"></div>
            <div className="flex justify-center items-center cursor-pointer">
              <SearchIcon style={{ fontSize: '30px' }} />
            </div>
            <div className="flex justify-center items-center relative cursor-pointer">
              <ShoppingCartIcon style={{ fontSize: '30px' }} />
              <div className="w-2 h-2 bg-green-500 rounded-full flex justify-center items-center text-[8px] text-white font-semibold p-1 absolute top-0 right-0">
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
