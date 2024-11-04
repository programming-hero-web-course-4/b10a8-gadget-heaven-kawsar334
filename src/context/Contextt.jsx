import React, { createContext, useContext, useState, useEffect } from 'react';

const CartWishlistContext = createContext();

const CartWishlistProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        const storedWishlist = localStorage.getItem('wishlist');
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    });

    // Add item to cart
    const addToCart = (item) => {
        setCart((prev) => {
            const updatedCart = [...prev, item];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // Add item to wishlist
    const addToWishlist = (item) => {
        setWishlist((prev) => {
            const updatedWishlist = [...prev, item];
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCart((prev) => {
            const updatedCart = prev.filter((item) => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // Remove item from wishlist
    const removeFromWishlist = (id) => {
        setWishlist((prev) => {
            const updatedWishlist = prev.filter((item) => item.id !== id);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };
    

    const Purchase = () => {
        localStorage.removeItem('cart');
        setCart([]);
    };

    return (
        <CartWishlistContext.Provider value={{
            cart,
            wishlist,
            addToCart,
            addToWishlist,
            removeFromCart,
            removeFromWishlist,
            Purchase,
        }}>
            {children}
        </CartWishlistContext.Provider>
    );
};


export const useCartWishlist = () => {
    return useContext(CartWishlistContext);
};

export default CartWishlistProvider;
