import React, { useEffect, useState } from "react";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";
import { BiLineChart } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { useSelector } from "react-redux";

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

  useEffect(() => {
    if (country && countryData[country.id]) {
      setData(countryData[country.id]);
    } else {
      setData(countryData.default);
    }
  }, [country]);

  return (
    <div className="bg-white rounded-xl shadow w-full h-full border border-gray-400">
        <div className="flex justify-between items-center p-4 border-b border-gray-400 ">
            <h2 className="text-lg font-semibold">Spend {country ? `- ${country.name}` : ""}</h2>
            <div>
                <button className={`${view ==="bar"?"text-gray-400":"text-blue-600"} p-2 bg-gray-500/20 rounded-lg me-2`} disabled={view ==="line"} onClick={() => setView("line")}><BiLineChart size={28}/></button>
                <button className={`${view ==="line"?"text-gray-400":"text-blue-600"} p-2 bg-gray-500/20 rounded-lg`} disabled={view ==="bar"} onClick={() => setView("bar")}><AiOutlineBarChart size={28}/></button>
            </div> 
        </div>
        <div className="p-4 w-full h-[75%]">
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
        <div className="flex justify-start items-center  gap-2 p-4 border-t border-gray-400 ">
            <span className="w-[15px] h-[15px] bg-[#ff5900]">&nbsp;</span>
            {country?.name}
        </div>
    </div>
  );
}

export default Trends;
