import useFetch from '../../data/UseFetch';
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CartContext from '../../context/CartContext';

const DetailsContents = () => {

  const {
    cart,
    wishlist,
    purchase,
    addToCart,
    addToWishlist,
    addToParchase,
    descendingProductList,
    sortedProduct,
  } = CartContext()


  const id = useLocation().pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [data, setData] = useState([]);
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


  let title = product?.product_title
    useEffect(() => {
      document.title = title;
    }, [title]);

  return (
    <div className="w-full md:w-[80%]  h-max md:h-[400px]  flex justify-center items-center flex-col md:flex-row shadow  gap-4 absolute  left-[50%] top-[240px] transform translate-x-[-50%] border-[2px] bg-[white] border-[#9538E2] p-5 rounded-[20px] ">
      <img src={product?.product_image} alt="Loading..." className='w-full md:w-[300px] object-cover h-[200px] md:h-full rounded-[20px]  ' />
      <div className='flex flex-col justify-between items-start gap-2 '>
        <div className="w- ">
          <h2 className='font-bold '>{product?.product_title}</h2>
          <p>Price: ${product?.price}</p>
          <button><strong>In Stock</strong>:{product?.availability ? "Yes" : "No"}</button>
          <p >{product?.description}.</p>
          <h2 className="font-bold">Specification:</h2>
          <ul>
            {product?.specification?.map((item, index)=>(
              <li>{index+1} {item}</li>
            ))}
          </ul>
        </div>
        <div className="w-[35%]">
          <p>Rating : {product?.rating}⭐  </p>
        </div>
        <div className=' w-full flex justify-start items-center gap-4  py-1'>
          <button className='bg-[#9538E2] hover:bg-[white] hover:text-blue w-[80%] md:w-max border rounded-full py-1 px-3 text-[white]  flex justify-center items-center gap-2' onClick={()=>addToCart(product)}>Add To Card  <i className="fa-solid fa-cart-arrow-down "></i></button>
          
          <button onClick={()=>addToWishlist(product)}> <i className="fa-regular fa-heart text-xl"></i></button>
        </div>
      </div>
    </div>
  )
}

export default DetailsContents;