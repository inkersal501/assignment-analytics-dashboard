import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateFilterDates, updateShowFilterModal} from "../store/appSlice";
import { IoCloseOutline } from "react-icons/io5";
 import {formateFromDate, formateToDate} from "../utils";

function Filter() {
    const dispatch = useDispatch();
    const {showFilterModal} = useSelector((state) =>state.app);
    
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(updateFilterDates({from : formateFromDate(fromDate), to: formateToDate(toDate)}));
        dispatch(updateShowFilterModal(false));
    };

    return (
        <>
        {showFilterModal && 
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
           
            <div
                className="absolute inset-0 bg-black opacity-50"
                onClick={() => dispatch(updateShowFilterModal(false))}
            ></div>

            <div className="bg-white text-black rounded-lg shadow-xl p-6 z-10 w-full max-w-md">
            
            <div className="p-4 w-full max-w-md relative">
                <h4 className='text-2xl font-semibold pb-4'>Filter</h4>
                <span className='absolute right-5 top-5 cursor-pointer' onClick={() => dispatch(updateShowFilterModal(false))}><IoCloseOutline size={24} color='gray'/></span>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="fromDate" className="mb-1 font-medium">From Date</label>
                        <input
                            type="date"
                            id="fromDate"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            className="border rounded p-2"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="toDate" className="mb-1 font-medium">To Date</label>
                        <input
                            type="date"
                            id="toDate"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            className="border rounded p-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#ff5900] text-white p-2 rounded hover:bg-[#ff5900]/80 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
            </div>
        </div>
        }</>
    );
}

export default Filter;
