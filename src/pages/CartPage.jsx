import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import DashboardHero from '../components/dashboardComponents/DashboardHero'
import CartHeroContents from '../components/dashboardComponents/CartHeroContents'

const CartPage = () => {


    
  return (
    <div className='w-full'>
          <DashboardHero Contents={CartHeroContents}/>
        <div className='flex justify-between items-start md:items-center w-[90%] md:w-[80%] m-auto my-7 flex-col md:flex-row '>
            <h2 className='text-2xl font-bold'>Cart</h2>
              <div className='flex justify-center items-start md:items-center gap-3  p-1 flex-col md:flex-row '>
                <h2 className='font-bold'>Total cost :10000</h2>
                <div className='flex gap-1'>
                      <button className='border rounded-full py-1 px-3 bg-blue text-[white]'>Sorted By price</button>
                      <button className='border rounded-full py-1 px-3 '>Purchase</button>
                </div>

            </div>
        </div>
        <div className='w-full md:w-[90%] p-7  flex flex-col justify-center items-center gap-4 m-auto'>
              <div className="w-full md:w-[95%] flex items-center  justify-between p-4 bg-white shadow-md rounded-lg mb-4">
                  <div className="flex items-start md:items-center flex-col md:flex-row  gap-4">
                      <img
                          src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
                          alt="Product"
                          className="mr-4 rounded w-[200px] h-[100px] shadow"
                      />
                      <div>
                          <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
                          <p className="text-gray-600">This is a brief description of the product.</p>
                          <p className="text-gray-800 font-bold">$29.99</p>
                      </div>
                  </div>

                  <button className="text-red-600  w-7 h-7 border p-1 flex justify-center items-center rounded-[50%] hover:text-[white] hover:bg-[crimson] hover:border-none ">
                      <i className="fas fa-times   cursor-pointer" aria-hidden="true"></i>
                  </button>
              </div>

              <div className="w-full md:w-[95%] flex items-center  justify-between p-4 bg-white shadow-md rounded-lg mb-4">
                  <div className="flex items-start md:items-center flex-col md:flex-row  gap-4">
                      <img
                          src="https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
                          alt="Product"
                          className="mr-4 rounded w-[200px] h-[100px] shadow"
                      />
                      <div>
                          <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
                          <p className="text-gray-600">This is a brief description of the product.</p>
                          <p className="text-gray-800 font-bold">$29.99</p>
                      </div>
                  </div>

                  <button className="text-red-600  w-7 h-7 border p-1 flex justify-center items-center rounded-[50%] hover:text-[white] hover:bg-[crimson] hover:border-none ">
                      <i className="fas fa-times   cursor-pointer" aria-hidden="true"></i>
                  </button>
              </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CartPage