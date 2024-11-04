import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import Products from '../components/producs/Products';
import HomeContents from '../components/childrenComponents/HomeContents';
import useFetch from '../data/UseFetch';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div >
         
            <Hero Contents={HomeContents}/>
            <Products />
        </div>
    );
};

export default Home;
