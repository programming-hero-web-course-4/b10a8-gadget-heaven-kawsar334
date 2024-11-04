import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'
import DashboardHero from '../components/dashboardComponents/DashboardHero'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <DashboardHero/>
            <Outlet />
            <Footer />

        </div>
    )
}

export default Dashboard