import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageTitle from './components/PageTitle';
import Details from './pages/Details';
import Dashboard from './pages/Dashboard';
import CartPage from './pages/CartPage';
import Layout from './pages/Layouts/Layout';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import About from './pages/About';
import Statistics from './pages/Statistics';
import NotFound from './pages/Notfound';
import CartContext from './context/CartContext';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: (
            <PageTitle title="Home">
              <Home />
            </PageTitle>
          ),
        },
        {
          path: "details/:id",
          element: (
             <Details/>
          ),
        },
        {
          path: "about",
          element: (
            <PageTitle title="About Us">
              <About />
            </PageTitle>
          ),
        },
        
     
      ],
    },
    {
      path: "dashboard/",
      element: (
        <PageTitle title="Dashboard">
          <Dashboard />
        </PageTitle>
      ),
      children: [
       {
          path: "cart",
          element: (
            <PageTitle title="Cart Lists">
              <CartPage />
            </PageTitle>
          ),
       },
        {
          path: "wishlist",
          element: (
            <PageTitle title="wishlist">
              <Wishlist />
            </PageTitle>
          ),
        },
          {
          path: "statistics",
          element: (
            <PageTitle title="Statistics">
              <Statistics />
            </PageTitle>
          ),
        }
      ]
    },
    {
      path: "/login",
      element: (<PageTitle title="Login"><Login /></PageTitle>),
    },
    {
      path: "*",
      element: (
        <PageTitle title="404 Not Found">
          <NotFound />
        </PageTitle>
      ),
    },
 
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
