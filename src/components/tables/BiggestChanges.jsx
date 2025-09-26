import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { GoDotFill } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";
import Tabs from "./Tabs";
 
const data = [
  { 
    id: 1, 
    name: "Discovery (LOC)", 
    location: "India", 
    spend: { total: "6,109.89", profit: "27.42" },
    barWidth: 100,
    barColor: "#ef4444" 
  },
  { 
    id: 2, 
    name: "Competitor (LOC)", 
    location: "India", 
    spend: { total: "6,109.89", profit: "27.42" },
    barWidth: 60,
    barColor: "#ef4444" 
  },
  { 
    id: 3, 
    name: "Today tab (LOC)", 
    location: "India", 
    spend: { total: "6,109.89", profit: "27.42" },
    barWidth: 30,
    barColor: "#facc15" 
  },
  { 
    id: 4, 
    name: "Branding (LOC)", 
    location: "India", 
    spend: { total: "6,109.89", profit: "27.42" },
    barWidth: 8,
    barColor: "#facc15" 
  },
];

const columns = [
  { 
    accessorFn: (row) => row,
    accessorKey: "name",
    header: "",
    cell: ({ getValue }) => {
      const { name, location, barWidth, barColor } = getValue();
      return (
        <div className="flex items-center gap-4 w-full">
          <div><GoDotFill color="rgba(67, 186, 8, 1)" size={20}/></div>
          <div className="min-w-0 flex-shrink-0">
            <div className="text-sm font-medium text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{location}</div>
          </div>
          <div className="flex-1 mx-6">
            <div className="w-full bg-gray-100 rounded-full h-6 relative overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-300"
                style={{ 
                  width: `${barWidth}%`,
                  backgroundColor: barColor
                }}
              ></div>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorFn: (row) => row.spend,
    id: "spend",
    header: "",
    cell: ({ getValue }) => {
      const spend = getValue();
      return (
        <div className="text-right min-w-24">
          <div className="text-sm font-medium text-gray-900">${spend.total}</div>
          <div className="text-sm text-gray-500">+{spend.profit}%</div>
        </div>
      );
    },
    sortingFn: (a, b) => parseFloat(a.original.spend.total.replace(/,/g, "")) - parseFloat(b.original.spend.total.replace(/,/g, "")),
  }
];

function BiggestChanges() {
  const [sorting, setSorting] = useState([]);
   

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });   

  return (
    <div className="w-full h-full">
      <h2 className="text-2xl mb-3">Biggest Changes</h2> 
      
        <div className="bg-white rounded-xl shadow w-full  border border-gray-300"> 
            <Tabs />
 
        <div className="p-4 border-b border-gray-100">
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            Spend
            <FiChevronDown className="w-4 h-4" />
          </button>
        </div>
 
        <table className="w-full">
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b border-gray-50 last:border-b-0 hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 

export default BiggestChanges;