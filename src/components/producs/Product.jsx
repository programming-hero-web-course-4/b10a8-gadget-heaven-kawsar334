import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = ({item}) => {
  return (
  <div className="card bg-base-100 w-[100%] md:w-[45%] lg:w-[30%] shadow-xl p-3 " key={item?.product_id}>
      <figure className="px pt-1">
        <img
          src={item?.product_image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkA6AqvKiCfu8HTMpbCSpa-W2uKiehcy66Pg&s"}
          alt="Shoes"
          className="rounded-xl h-[150px] " />
      </figure>
      <div className="">
        <h2 className="card-title">{item?.product_title.slice(0, 15)}...</h2>
        <p>Price:{item?.price}</p>
        <div className="card-actions">
          <NavLink to={`/details/${item?.product_id}`} className="border rounded-[20px] px-5 py-1 my-1 ">View Details</NavLink >
        </div>
      </div>
    </div> 
  )
}

export default Product