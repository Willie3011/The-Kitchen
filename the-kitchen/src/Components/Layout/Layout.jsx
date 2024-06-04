import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className='overflow-x-hidden w-screen'>
      <Header />
      <main className='container box-border h-dvh w-screen p-4'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
