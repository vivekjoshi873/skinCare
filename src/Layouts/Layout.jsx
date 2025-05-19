import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();
  const isAllProductsPage = location.pathname === '/allproduct';
  const isCurlyHairPage = location.pathname === '/curly-hair';
  const issuncreamPage = location.pathname === '/suncream';
  const istanningcreamPage = location.pathname === '/tanning-cream';
  const isfacewashPage = location.pathname === '/face-wash';
  const isacnePage = location.pathname === '/acnecream';
  const iscicacreamPage = location.pathname === '/cicacream';
  const isstorePage = location.pathname === '/store';
  return (
    <>
      {!isAllProductsPage && !isCurlyHairPage &&!issuncreamPage && !isacnePage && !istanningcreamPage && !isfacewashPage && !iscicacreamPage && !isstorePage && <Header showHero={true} />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout
