import { ToastContainer } from 'react-toastify';
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

PageTitle
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: (
            <PageTitle title="Home page">
              <Home />
            </PageTitle>
          ),
        },
        {
          path: "details/:id",
          element: (
            <PageTitle title="Details page">
             <Details/>
            </PageTitle>
          ),
        },
        
     
      ],
    },
    {
      path: "dashboard/",
      element: (
        <PageTitle title="this is details page">
          <Dashboard />
        </PageTitle>
      ),
      children: [
       {
          path: "cart",
          element: (
            <PageTitle title="Cart page">
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
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    }
 
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
