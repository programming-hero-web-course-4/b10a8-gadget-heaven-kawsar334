import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const CartContext = () => {
 const [totalPrice, setTotalPrice] = useState(0);
    const [cart, setCart] = useState((prev) => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });
    const [wishlist, setWishlist] = useState((prev) => {
        const storedWishlist = localStorage.getItem("wislist");
        return storedWishlist ? JSON.parse(storedWishlist) : []
    });
    const [purchase, setParchase] = useState((prev) => {
        const storedPurchase = localStorage.getItem("purchase");
        return storedPurchase ? JSON.parse(storedPurchase) : []
    });

    const [sortedProduct, setSortedProduct] = useState([])


    const addToCart = (item) => {
        setCart((prev) => {
            // const updatedCart = [...prev, item];
                   const updatedCart = [...prev, item].sort((a, b) => b.price - a.price);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            toast.success(`${item?.product_title} added to cart ! `);
            return updatedCart;
        })
    }

    const addToWishlist = (item) => {
        setWishlist((prev) => {
            const updatedWishList = [...prev, item].sort((a, b) => b.price - a.price);
            localStorage.setItem("wislist", JSON.stringify(updatedWishList))
        })

        toast.success(`added ${item?.product_title} to wishlist ! `)
    }


    const addToParchase = (item) => {
        setParchase((prev) => {
            const updatedPurchase = [...prev, item];

            localStorage.setItem("purchase", JSON.stringify(updatedPurchase));
        })

    }
    // descending product list
    const descendingProductList = () => {
        setCart(cart.sort((a, b) => b.price - a.price))
        toast.success("Sorted product List");
    }

    // remove from card   
    const removeFromCart = (itemId) => {
        setCart((prev) => {
            const updatedCart = prev.filter(item => item?.product_id !== itemId.product_id);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            toast.error(`you removed ${itemId.product_title} .. from cart List`)
            return updatedCart;
        });
    };

    // Remove from wishlist
    const removeFromWishlist = (itemId) => {
        setWishlist((prev) => {
            const updatedWishlist = prev.filter(item => item?.product_id !== itemId.product_id);
            localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
              toast.error(`you removed ${itemId.product_title} .. from wislist List`)
            return updatedWishlist;
        });
    };
    // Remove from purchase list
    const removeFromPurchase = (itemId) => {
        setPurchase((prev) => {
            const updatedPurchase = prev.filter(item => item.id !== itemId);
            localStorage.setItem("purchase", JSON.stringify(updatedPurchase));
            return updatedPurchase;
        });
    };
 

 useEffect(() => {
        const calculateTotalPrice = () => {
            return cart.reduce((total, item) => total + item.price, 0);
        };
        setTotalPrice(calculateTotalPrice());
    }, [cart]);

// addToCartFromWishlist
    const addToCartFromWishlist = (itemId) => {
    setWishlist((prevWishlist) => {
        const item = prevWishlist.find(wishItem => wishItem.product_id === itemId.product_id);

        if (item) {
            setCart((prevCart) => {
                const updatedCart = [...prevCart, item].sort((a, b) => b.price - a.price);
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                toast.success(`${item?.product_title} added to cart from wishlist!`);
                return updatedCart;
            });

            const updatedWishlist = prevWishlist.filter(wishItem => wishItem.product_id !== itemId.product_id);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        }

        return prevWishlist;
    });
};


    return {
        cart,
        totalPrice,
        wishlist,
        purchase,
        addToCart,
        addToWishlist,
        addToParchase,
        descendingProductList,
        sortedProduct,
        removeFromCart,
        removeFromWishlist,
        removeFromPurchase,
        addToCartFromWishlist,
    }
}

export default CartContext