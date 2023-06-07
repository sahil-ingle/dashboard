import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Maincontent from './Maincontent';
import "../App.css";


const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <Maincontent/>
      </div>
    </div>
  );
};

export default Layout;
