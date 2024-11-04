import React from 'react'
import { Footer } from '../components/Footer'
import DashboardHero from '../components/dashboardComponents/DashboardHero'
import WishlistHeroContents from '../components/dashboardComponents/WishlistHeroContents'

const Wishlist = () => {
    
  return (
      <div className='w-full'>
          <DashboardHero Contents={WishlistHeroContents}/>
          <div className='flex justify-between items-start md:items-center w-[90%] md:w-[80%] m-auto my-7 flex-col md:flex-row '>
              <h2 className='text-4xl font-bold'>wishlist</h2>
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

export default Wishlist