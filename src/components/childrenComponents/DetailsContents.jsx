import useFetch from '../../data/UseFetch';
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const DetailsContents = () => {
  const id = useLocation().pathname.split("/")[2];
  const [product, setProduct] = useState({});

  const [data, setData] = useState([]);


  console.log(product)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../product.json");
        const result = await response.json();
        setData(result)
      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  }, ["./data.json"]);
  useEffect(() => {
    if (data) {
      const product = data.find(item => item.product_id === id);
      setProduct(product);
    }
  }, [id, data]);

  return (
    <div className="w-full md:w-[80%]  h-max md:h-[400px]  flex justify-center items-center flex-col md:flex-row shadow  gap-4 absolute  left-[50%] top-[200px] transform translate-x-[-50%] border-[2px] bg-[white] border-[#9538E2] p-5 rounded-[20px] ">
      <img src={product?.product_image} alt="Loading..." className='w-full md:w-[300px] object-cover h-[200px] md:h-full rounded-[20px]  ' />
      <div className='flex flex-col justify-between items-start gap-2 '>
        <div className="w- ">
          <h2 className='font-bold '>{product?.product_title}</h2>
          <p>Price: ${product?.price}</p>
          <button><strong>In Stock</strong>:{product?.availability ? "Yes" : "No"}</button>
          <p >{product?.description}.</p>
          <h2 className="font-bold">Specification:</h2>
          <ol>
            <li>1. Intel i7 Gen</li>
            <li>2. 16 GB Ram</li>
            <li>3. 512 GB SSD</li>
          </ol>
        </div>
        <div className="w-[35%]">
          <p>Rating : {product?.rating}⭐  </p>
        </div>
        <button className='bg-[#9538E2] w-full md:w-max border rounded-full py-1 px-3 text-[white] '>Add To Card</button>
      </div>
    </div>
  )
}

export default DetailsContents;