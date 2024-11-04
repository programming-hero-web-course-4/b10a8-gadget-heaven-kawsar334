import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = () => {
  return (
    <div className="card bg-base-100 w-[100%] md:w-[45%] lg:w-[30%] shadow-xl p-3 ">
      <figure className="px pt-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkA6AqvKiCfu8HTMpbCSpa-W2uKiehcy66Pg&s"
          alt="Shoes"
          className="rounded-xl h-[150px] " />
      </figure>
      <div className="">
        <h2 className="card-title">Dell XPS 13</h2>
        <p>Price:1000k</p>
        <div className="card-actions">
          <NavLink to={`/details/:id`} className="border rounded-[20px] px-5 py-1 my-1 ">View Details</NavLink >
        </div>
      </div>
    </div>
  )
}

export default Product