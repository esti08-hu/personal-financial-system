'use client'
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Report() {
    return (
      <div className='container h-full'>
          <h1 className="text-xl font-bold text-[#22577A] mb-5">Report</h1>
          <hr className="h-1 bg-gray-400 w-full"/>
          <div>
            <h3 className="text-[#22577A] mt-5 font-bold mb-10">
             Income/Expense Cahrt for current month :
            </h3>
          </div>
     <div className='flex justify-center'>
     <PieChart
        series={[
          {
            data: [
              { id: 0, value: 30, label: 'Income' },
              { id: 1, value: 20, label: 'Expense' },
              { id: 2, value: 15, label: 'Saved' },
            ],
          },
        ]}
        width={400}
        height={200}
      />
     </div>
      </div>
    );
  }