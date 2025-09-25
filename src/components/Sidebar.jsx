import React from 'react'
import { GoDotFill, GoQuestion, GoHistory } from "react-icons/go";
import { TbDashboard, TbPhoto } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { RiSearchFill } from "react-icons/ri"; 
import { IoFlashOutline, IoSettingsOutline } from "react-icons/io5"; 
import squareSvg from "../assets/square.svg";   
import { PiUserCircle } from "react-icons/pi";

function Sidebar() {
  return (
    <div className='h-screen w-[55px] bg-[#ff5900] flex flex-col'>
 
      <div className="my-4 flex justify-center">
        <GoDotFill size={60} color='#fff'/>
      </div>
 
      <div className="flex flex-col justify-between flex-1"> 
        <ul className='space-y-8 w-full'>
          <li className='bg-white/40 flex justify-center'><TbDashboard size={25} color='#fff'/></li>
          <li className='flex justify-center hover:bg-white/40'><RxDashboard size={25} color='#fff' /></li>
          <li className='flex justify-center hover:bg-white/40'><img src={squareSvg} alt="square icon" width={25} height={25} /></li>
          <li className='flex justify-center hover:bg-white/40'><RiSearchFill size={25} color='#fff' /></li>
          <li className='flex justify-center hover:bg-white/40'><TbPhoto size={25} color='#fff' /></li>
          <li className='flex justify-center hover:bg-white/40'><IoFlashOutline size={25} color='#fff' /></li>
          <li className='flex justify-center hover:bg-white/40'><GoHistory size={25} color='#fff' /></li> 
        </ul>
 
        <ul className='space-y-8 w-full mb-6'>
          <li className='flex justify-center hover:bg-white/40'><IoSettingsOutline size={25} color='#fff'/></li>
          <li className='flex justify-center hover:bg-white/40'><GoQuestion size={25} color='#fff' /></li>
          <li className='flex justify-center hover:bg-white/40'><PiUserCircle size={25} color='#fff' /></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;
