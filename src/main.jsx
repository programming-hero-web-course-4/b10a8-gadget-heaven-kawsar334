import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartWishlistProvider from './context/Contextt.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartWishlistProvider>

    <App />
    </CartWishlistProvider>
  </StrictMode>,
)
