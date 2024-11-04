import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-full md:w-[20%] shadow  rounded p-3 mt-10'>
      <h1 className='text-xl font-semibold py-3 w-full'>Filter by categories </h1>
      <ul  className='flex justify-start items-start flex-row  md:flex-col gap-3 flex-wrap w-full  md:w-[90%] '>
        <li className='border py-1 px-3 rounded-[20px]  w-[max-content] md:w-[95%] cursor-pointer hover:bg-blue hover:text-[white] bg-[purple] text-white'>Item one </li>
        <li className='border py-1 px-3 rounded-[20px]  w-[max-content] md:w-[95%] cursor-pointer hover:bg-blue hover:text-[white] bg-[lightgray] '>Item one </li>
        <li className='border py-1 px-3 rounded-[20px]  w-[max-content] md:w-[95%] cursor-pointer hover:bg-blue hover:text-[white] bg-[lightgray] '>Item one </li>
        <li className='border py-1 px-3 rounded-[20px]  w-[max-content] md:w-[95%] cursor-pointer hover:bg-blue hover:text-[white] bg-[lightgray] '>Item one </li>
        <li className='border py-1 px-3 rounded-[20px]  w-[max-content] md:w-[95%] cursor-pointer hover:bg-blue hover:text-[white] bg-[lightgray] '>Item one </li>
        <li className='border py-1 px-3 rounded-[20px]  w-[max-content] md:w-[95%] cursor-pointer hover:bg-blue hover:text-[white] bg-[lightgray] '>Item one </li>
        <li className='border py-1 px-3 rounded-[20px]  w-[max-content] md:w-[95%] cursor-pointer hover:bg-blue hover:text-[white] bg-[lightgray] '>Item one </li>
      </ul>
    </div>
  )
}

export default Sidebar