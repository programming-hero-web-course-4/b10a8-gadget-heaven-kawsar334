
const DetailsContents = () => {
    return (
        <div className="w-full md:w-[80%]  h-max md:h-[400px]  flex justify-center items-center flex-col md:flex-row shadow  gap-4 absolute  left-[50%] top-[200px] transform translate-x-[-50%] border-[2px] bg-[white] border-[#9538E2] p-5 rounded-[20px] mb-[100px]">
            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Loading..." className='w-full md:w-[300px] object-cover h-[200px] md:h-full rounded-[20px]  ' />
            <div className='flex flex-row md:flex-col justify-between items-start gap-2 '>
               <div className="w-[55%]">
                    <h2 className='font-bold '>Samsung Galaxy S23 Ultra</h2>
                    <p>Price: $ 999.99</p>
                    <button>In Stock</button>
                    <p>Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.</p>
                    <h2 className="font-bold">Specification:</h2>
                    <ol>
                        <li>1. Intel i7 Gen</li>
                        <li>2. 16 GB Ram</li>
                        <li>3. 512 GB SSD</li>
                        <li>4. Touch Screen</li>
                    </ol>
               </div>
                <div className="w-[35%]">
                    <p>Rating ⭐ </p>
                    <button className='bg-[#9538E2] border rounded-full py-1 px-3 text-[white] '>Add To Card</button>
               </div>
            </div>
        </div>
    )
}

export default DetailsContents;