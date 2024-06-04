import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart';
import Menu from './Pages/Menu/Menu';
import Reviews from './Pages/Reviews/Reviews';
import Layout from './Components/Layout/Layout';
import Signup from './Pages/Signup/Signup';
function App() {
  const router = createBrowserRouter([
    {
      path: '/The-Kitchen/',
      element: (<Layout>
        <Home/>
        </Layout>
      ),
      errorElement: <div>404: Page Not Found</div>
    },
    {
      path: '/The-Kitchen/about',
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: '/The-Kitchen/menu',
      element: (
        <Layout>
          <Menu />
        </Layout>
      ),
    },
    {
      path: '/The-Kitchen/reviews',
      element: (
        <Layout>
          <Reviews />
        </Layout>
      ),
    },
    {
      path: '/The-Kitchen/cart',
      element: (
        <Layout>
          <Cart />
        </Layout>
      ),
    },
    {
      path: '/The-Kitchen/signup',
      element: (
        <Layout>
          <Signup />
        </Layout>
      )
    }
]);
  return <RouterProvider router={router}/>
  
}

export default App
