import React, { createContext, useContext, useState, useEffect } from 'react';

const CartWishlistContext = createContext();

export const useCartWishlist = () => useContext(CartWishlistContext);

export const CartWishlistProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Retrieve cart from localStorage, if it exists
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        // Retrieve wishlist from localStorage, if it exists
        const storedWishlist = localStorage.getItem('wishlist');
        return storedWishlist ? JSON.parse(storedWishlist) : [];
    });

    // Function to add item to cart and update localStorage
    const addToCart = (item) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, item];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        });
    };

    // Function to add item to wishlist and update localStorage
    const addToWishlist = (item) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = [...prevWishlist, item];
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            return updatedWishlist;
        });
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    return (
        <CartWishlistContext.Provider value={{ cart, wishlist, addToCart, addToWishlist }}>
            {children}
        </CartWishlistContext.Provider>
    );
};
