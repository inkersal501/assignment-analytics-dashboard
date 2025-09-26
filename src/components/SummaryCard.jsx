import React from 'react'

function SummaryCard({data}) {
    const profitColor = data.profit > 0 ? "text-green-500" : (data.profit<0 ? "text-red-500": "text-gray-500");
    return (
        <div className='p-4 shadow rounded-xl max-w-80 hover:shadow-lg'>
            <p className='text-md'>{data.text}:</p>
            <h2 className='font-bold text-xl py-1'>{data.amount}</h2>
            <p className={`${profitColor}`}>{data.profit > 0 ? "+": ""} {data.profit}%</p>
        </div>
    )
}

export default SummaryCard;