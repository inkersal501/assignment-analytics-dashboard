import React from 'react'
import {totalSummary} from "../data";
import SummaryCard from './SummaryCard';


function TotalSummary() {
  return (
    <div>
        <h2 className='text-xl font-semibold pb-4'>Total Summary</h2>
        <div className='flex sm:flex-col md:flex-row gap-5'>
            {totalSummary.map((data, index)=>(
                <SummaryCard key={index} data={data}/>
            ))}
        </div>
    </div>
  )
}

export default TotalSummary