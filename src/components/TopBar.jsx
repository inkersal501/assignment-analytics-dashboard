import React from 'react'
import { BiSolidFilePdf } from "react-icons/bi";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";  
import { MdFilterList } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {updateShowFilterModal} from "../store/appSlice";


function TopBar() {
    const dispatch = useDispatch();
    const {filterDates} = useSelector((state) =>state.app);
    
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full pt-5 gap-6">
        
            <div className="md:w-1/2">
                <h1 className="text-2xl md:text-4xl font-semibold">Overview dashboard</h1>
                <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-3">
                    A consolidate view of your app efficiency by storefonts and key metrics.
                </p>
            </div>
        
            <div className="flex flex-col md:flex-row md:items-center md:gap-6 md:w-1/2 justify-end px-2 md:px-8 gap-5">
                
                <div className="flex flex-col sm:flex-row gap-5 sm:items-center w-full md:w-auto">           
                    <button className="flex items-center justify-between gap-2 border border-[#ccc] px-3 py-2 rounded-xl w-full sm:w-60">
                        <span className="flex items-center gap-2">
                        <BiSolidFilePdf className="text-red-600 text-xl md:text-2xl" />
                        <span className="text-gray-400 text-sm md:text-base">Pdf Name</span>
                        </span>
                        <MdOutlineKeyboardArrowDown className="text-base md:text-lg" />
                    </button>
                
                    <div className="flex items-center gap-2">
                        <CiCalendarDate className="text-2xl md:text-5xl" />
                        <div className="flex flex-col leading-tight">
                        <span className="text-xs md:text-sm text-gray-400">Last 7 Days</span>
                        <span className="text-sm md:text-base font-medium">{filterDates.from} - {filterDates.to}</span>
                        </div>
                    </div>
                </div>
        
                <button className="p-2 rounded-lg hover:bg-gray-100" onClick={()=>dispatch(updateShowFilterModal(true))}>
                    <MdFilterList className="text-2xl md:text-5xl" />
                </button>
            </div>
        </div>
    )
}

export default TopBar;
