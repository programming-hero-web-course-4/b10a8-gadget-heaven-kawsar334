import React, { useEffect, useState } from 'react'

const CartContext = () => {

    const [cart, setCart] = useState((prev)=>{
        const storedCart = localStorage.getItem('cart');
        return storedCart? JSON.parse(storedCart) : [];
    });
    const [wishlist, setWishlist] = useState((prev)=>{
        const storedWishlist = localStorage.getItem("wislist");
        return storedWishlist? JSON.parse(storedWishlist):[]
    });
    const [purchase, setParchase] = useState((prev)=>{
        const storedPurchase = localStorage.getItem("purchase");
        return storedPurchase? JSON.parse(storedPurchase) :[]
    });

    const [sortedProduct, setSortedProduct] = useState([])


    const addToCart = (item)=>{

        setCart((prev)=>{
            const updatedCart = [...prev, item];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        })
    }

    const addToWishlist = (item)=>{
        setWishlist((prev)=>{
            const updatedWishList = [...prev, item];
            localStorage.setItem("wislist", JSON.stringify(updatedWishList))
        })

    }
  

    const addToParchase=(item)=>{
        setParchase((prev)=>{
            const updatedPurchase = [...prev, item];

            localStorage.setItem("purchase", JSON.stringify(updatedPurchase))
        })

    }
    // descending product list
    const descendingProductList = ()=>{
        setSortedProduct(cart.sort((a,b)=>b.price - a.price))
    }

    // remove from card     
    // remove from purchaselist
    // remove from wishlist




  return{
    cart,
    wishlist,
    purchase,
    addToCart,
    addToWishlist,
    addToParchase,
    descendingProductList,
    sortedProduct,
  }
}

export default CartContext