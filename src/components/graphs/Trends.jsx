import React, { useEffect, useState, useRef } from "react";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";
import { BiLineChart } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { useSelector } from "react-redux";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FaExpand } from "react-icons/fa6";
import screenfull from 'screenfull';

const countryData = {
  in: [
    { date: "5 July", spend: 50 },
    { date: "6 July", spend: 80 },
    { date: "7 July", spend: 65 },
    { date: "8 July", spend: 60 },
    { date: "9 July", spend: 85 }, 
    { date: "10 July", spend: 80 },
    { date: "11 July", spend: 50 },
  ],
  us: [
    { date: "5 July", spend: 70 },
    { date: "6 July", spend: 60 },
    { date: "7 July", spend: 90 },
  ],
  default: [
    { date: "5 July", spend: 10 },
    { date: "6 July", spend: 40 },
    { date: "7 July", spend: 30 },
    { date: "8 July", spend: 20 },
    { date: "9 July", spend: 35 },
  ],
};


function Trends() {
  const [view, setView] = useState("line"); 
  const {country} = useSelector((state) => state.app);
  const [data, setData] = useState(countryData.default);
  const containerRef = useRef(null);

  useEffect(() => {
    if (country && countryData[country.id]) {
      setData(countryData[country.id]);
    } else {
      setData(countryData.default);
    }
  }, [country]);

  const handleFullscreen = () => {
    if (screenfull.isEnabled && containerRef.current) {
      screenfull.toggle(containerRef.current);
    }
  };
  
  return (
    <div className=" w-full h-full ">
      <h2 className="text-2xl mb-3">Trends</h2>
    
      <div className="bg-white rounded-xl shadow w-full h-[500px] border border-gray-300" ref={containerRef}>
        <div className="flex justify-between items-center p-4 border-b border-gray-300 h-[15%]">
          <h2 className="text-lg font-semibold">Spend {country ? `- ${country.name}` : ""}</h2>
          <div>
            <button onClick={handleFullscreen} className={`text-gray-400 p-2 bg-gray-400/20 rounded-lg me-2`}><FaExpand size={22}/></button>
            <button className={`${view ==="bar"?"text-gray-400":"text-blue-600"} p-2 bg-gray-400/20 rounded-lg mx-2`} disabled={view ==="line"} onClick={() => setView("line")}><BiLineChart size={22}/></button>
            <button className={`${view ==="line"?"text-gray-400":"text-blue-600"} p-2 bg-gray-400/20 rounded-lg`} disabled={view ==="bar"} onClick={() => setView("bar")}><AiOutlineBarChart size={22}/></button>
          </div> 
        </div>
        <div className="p-4 w-full h-[70%]">
          <ResponsiveContainer width="95%" height="100%">
            {view === "line" ? (
              <LineChart data={data} fontSize={"12px"}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="linear" dataKey="spend" stroke="#ff5900" strokeWidth={3} />
              </LineChart>
            ) : (
            <BarChart data={data} fontSize={"12px"}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="spend" fill="#ff5900" />
            </BarChart>
            )}
          </ResponsiveContainer>
        </div>
        <div className=" h-[15%] flex justify-start items-center gap-2 p-4 border-t border-gray-300">
          <span className="w-[15px] h-[15px] bg-[#ff5900]">&nbsp;</span>
          {country?.name}
        </div>
      </div>
    </div>
  );
}

export default Trends;
 