import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { GoDotFill } from "react-icons/go";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import Tabs from "./Tabs";

// Sample data
const data = [
  { id: 1, name: "Discovery (LOC)", location: "India", spend: { total: "6,109.89", profit: "27.42" }, installs: { total: "44", profit: "27.42" }, conversion: "0.00" },
  { id: 2, name: "Competitor (LOC)", location: "India", spend: { total: "6,109.89", profit: "27.42" }, installs: { total: "121", profit: "27.42" }, conversion: "0.00" },
  { id: 3, name: "Today tab (LOC)", location: "India", spend: { total: "6,109.89", profit: "27.42" }, installs: { total: "44", profit: "27.42" }, conversion: "0.00" },
  { id: 4, name: "Branding (LOC)", location: "India", spend: { total: "6,109.89", profit: "27.42" }, installs: { total: "44", profit: "27.42" }, conversion: "0.00" },
];

const columns = [
  { 
    accessorFn: (row) => row,
    accessorKey: "name",
    header: "",
    cell: ({ getValue }) => {
      const {name, location} = getValue();
      return (
        <div className="flex items-center gap-3">
            <div><GoDotFill color="#22c55e" size={20}/></div>
            <div>
                <div className="text-sm font-medium text-gray-900">{name}</div>
                <div className="text-sm text-gray-500">{location}</div>
            </div>
        </div>
      );
    },
  },
  {
    accessorFn: (row) => row.spend,
    id: "spend",
    header: "Spend",
    cell: ({ getValue }) => {
      const spend = getValue();
      return (
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">${spend.total}</div>
          <div className="text-sm text-gray-500">+{spend.profit}%</div>
        </div>
      );
    },
    sortingFn: (a, b) => parseFloat(a.original.spend.total.replace(/,/g, "")) - parseFloat(b.original.spend.total.replace(/,/g, "")),
  },
  {
    accessorFn: (row) => row.installs,
    id: "installs",
    header: "Installs",
    cell: ({ getValue }) => {
      const installs = getValue();
      return (
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">${installs.total}</div>
          <div className="text-sm text-gray-500">+{installs.profit}%</div>
        </div>
      );
    },
    sortingFn: (a, b) => a.original.installs.total - b.original.installs.total,
  },
  {
    accessorKey: "conversion",
    header: "Conversion",
    cell: ({ getValue }) => {
      const conversion = getValue();
      return (
        <div className="text-right">
          <div className="text-sm font-medium text-gray-900">{conversion}%</div>
          <div className="text-sm text-gray-500">0%</div>
        </div>
      );
    },
  },
];

function TopList() {
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
        <h2 className="text-2xl mb-3">Top List</h2> 
        <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-sm">
            <Tabs />
            <table className="w-full">
                <thead className="bg-gray-50">
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th
                                key={header.id}
                                onClick={header.column.getToggleSortingHandler()}
                                className="cursor-pointer px-4 py-3 text-right text-sm font-medium text-gray-500 hover:text-gray-700"
                            >
                                <span className="flex items-center justify-end gap-1">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            {{
                                asc: <FiArrowUp size={16}/>,
                                desc: <FiArrowDown size={16} />,
                            }[header.column.getIsSorted()] ?? ""}
                            </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors">
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

export default TopList;