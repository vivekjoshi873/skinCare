import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';

function Navbar({ className = "" }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isDrawerOpen]);

    return (
        <nav className={`w-full flex justify-between items-center px-10 text-black py-2  ${className}`}>
            <button
                onClick={toggleDrawer}
                className="md:hidden text-lg tracking-wide"
            >
                Menu
            </button>

            <div className="text-2xl font-bold md:block">
                <Link to='/' className='text-3xl font-semibold logo'>ray.</Link>
            </div>

            <div className="md:flex gap-8 hidden">
                <NavLink to="/allproduct" className={({ isActive }) =>
                    `nav-link ${isActive ? "font-bold" : ""}`
                }>All products</NavLink>
                <Link to='/' className="nav-link">Sun</Link>
                <Link to='/' className="nav-link">Face</Link>
                <Link to='/' className="nav-link">Body</Link>
                <Link to='/' className="nav-link">Hair</Link>
            </div>

            <div className="md:flex gap-6 hidden">
                <Link to='/' className="nav-link">Our Story</Link>
                <NavLink to='/store' className={({ isActive }) =>
                    `nav-link ${isActive ? "" : ""}`
                }>Stores</NavLink>
            </div>

            <li className="list-none">
                <Cart />
            </li>

            <div className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 ">
                    <button
                        onClick={toggleDrawer}
                        className="text-2xl mb-4 "
                    >
                        ✕

                    </button>
                    <div className="flex flex-col gap-4">

                        <NavLink to="/allproduct" className={({ isActive }) =>
                            `nav-link text-2xl m-4 ${isActive ? "font-bold " : ""}`
                        }>All products</NavLink>
                        <hr className='border-gray-300' />
                        <Link to='/' className="nav-link text-2xl m-4">Sun</Link>
                        <hr className='border-gray-300' />
                        <Link to='/' className="nav-link text-2xl m-4">Face</Link>
                        <hr className='border-gray-300' />
                        <Link to='/' className="nav-link text-2xl m-4">Body</Link>
                        <hr className='border-gray-300' />
                        <Link to='/' className="nav-link text-2xl m-4">Hair</Link>
                        <hr className='border-gray-300' />
                        <Link to='/' className="nav-link text-2xl m-4 hidden md:hidden lg:block">
                            Our Story
                        </Link>

                        <NavLink
                            to='/store'
                            className={({ isActive }) =>
                                `nav-link text-2xl m-4  hidden md:block ${isActive ? '' : ''}`
                            }
                        >
                            Stores
                        </NavLink>
                    </div>
                </div>
            </div>

            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={toggleDrawer}
                />
            )}
        </nav>
    )
}

export default Navbar 