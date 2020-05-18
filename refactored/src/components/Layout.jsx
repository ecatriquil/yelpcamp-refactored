import React from 'react';
import Navbar from './Navbar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
    <div>
        <Navbar />
        {children}
    </div>
);

export default Layout;