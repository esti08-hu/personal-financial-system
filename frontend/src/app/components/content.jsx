import React from 'react'
import Image from 'next/image'
const Content = () => {
  return (
    <div className='container flex flex-col items-center justify-center mt-10  gap-4 '>
    <div className='text-section mt-10 flex flex-col justify-center items-center w-full gap-10'>
        <h5 className='text-gray-500'>-- OUR WORKING PROCESS</h5>
        <h1 class="text-4xl font-black text-[#22577A] mb-6 w-96 text-center">How to get started</h1>
    </div>

    <div className="flex w-2/3 justify-around items-center gap-6 text-center">
    <div className='flex flex-col w-11/12 gap-5'>
      <img src="/step1.png" alt="Image 1" />
        <h2 className='text-[#22577A] text-lg font-black'>Create an account</h2>
         <p className='text-gray-500'>
         Enter your basic information and set up your profile.  
         </p>
      </div>
      <div className="w-1/2 h-0.5 bg-gray-300"></div>
      <div className='flex flex-col w-11/12 gap-5'>
      <img src="/step1.png" alt="Image 1" />
        <h2 className='text-[#22577A] text-lg font-black'>Create your budget</h2>
         <p className='text-gray-500'>
         Utilize our budgeting tools to create a realistic budget.  
         </p>
      </div>
      <div className="w-1/2 h-0.5 bg-gray-300"></div>
      <div className='flex flex-col w-11/12 gap-5'>
      <img src="/step1.png" alt="Image 1" />
        <h2 className='text-[#22577A] text-lg font-black'>Set financial goals</h2>
         <p className='text-gray-500'>
         Define your short- and long-term financial goals and create a plan to achieve them.  
         </p>
      </div>
      <div className="w-1/2 h-0.5 bg-gray-300"></div>
      <div className='flex flex-col w-11/12 gap-5'>
      <img src="/step1.png" alt="Image 1" />
        <h2 className='text-[#22577A] text-lg font-black'>Explore our features</h2>
         <p className='text-gray-500'>
         Leverage our tools for budgeting, investments and debt. 
         </p>
      </div>
      
    </div>
      <div class="w-52 h-0 border-b border-dashed border-2 border-gray-500 mb-20 mt-10"></div>
    </div>

  )
}

export default Content