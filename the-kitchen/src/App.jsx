import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart';
import Menu from './Pages/Menu/Menu';
import Reviews from './Pages/Reviews/Reviews';
import Layout from './Components/Layout/Layout';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (<Layout>
        <Home/>
        </Layout>
      ),
      errorElement: <div>404: Page Not Found</div>
    },
    {
      path: '/about',
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: '/menu',
      element: (
        <Layout>
          <Menu />
        </Layout>
      ),
    },
    {
      path: '/reviews',
      element: (
        <Layout>
          <Reviews />
        </Layout>
      ),
    },
    {
      path: '/cart',
      element: (
        <Layout>
          <Cart />
        </Layout>
      ),
    }
]);
  return <RouterProvider router={router}/>
  
}

export default App
