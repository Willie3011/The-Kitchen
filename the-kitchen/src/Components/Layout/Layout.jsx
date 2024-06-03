import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className='overflow-x-hidden w-screen'>
      <Header />
      <main className='container h-dvh w-screen'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
