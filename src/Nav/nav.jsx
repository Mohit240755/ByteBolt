import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css"
import { IoHeartCircleSharp } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiLogoutBoxFill } from "react-icons/ri";
import Pic from "../image/logo.png"

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const loginUser = localStorage.getItem("loginuser");
        if (loginUser) {
            setIsLoggedIn(!!loginUser);
        }
    }, []);

    console.log("isLoggedIn:", isLoggedIn);
    console.log("open:", open);


    return (
        <>
            <div className="w-full">
                <nav className="bg-blue-300">
                    <ul className="flex justify-between h-20 text-lg p-6 font-serif font-bold">
                        <Link to={"/"}><li><img className="w-10 h-10 rounded-full" src={Pic} alt="no image" /></li></Link>
                        <Link to={"/men"}><li>Men</li></Link>
                        <Link to={"/women"}><li>Women</li></Link>
                        <Link to={"/kids"}><li>Kids</li></Link>
                        <Link to={"/beauty"}><li>Beauty</li></Link>
                        <Link to={"/product"}><li>Product</li></Link>
                        <Link to={"/kitchen"}><li>Kitchen & Home</li></Link>
                        <li ><input className="bg-amber-50 h-8 w-80 rounded-2xl" type="text" placeholder="   🔍 Search items" /></li>
                        <div className="flex gap-5 pr-15">
                            <div>
                                {isLoggedIn ? (
                                    <div className="relative inline-block text-left"
                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => {
                                        setTimeout(() => {
                                            setOpen(false);
                                        }, 1500);
                                    }} >
                                    <button onClick={() => setOpen(!open)}
                                        className="  text-3xl text-black focus:outline-none" > <IoHeartCircleSharp /> </button>
                                    {open && (<div className="absolute right-0 mt-2 w-40 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                        <div className="py-2">
                                            <button onClick={() => {
                                                localStorage.removeItem("loginuser");
                                                window.location.href = "/login";
                                            }} className=" flex gap-0.5 w-full text-left px-4 py-2 text-sm text-black hover:bg-yellow" >
                                                <span className="pt-1 "><RiLogoutBoxFill /> </span>
                                                Logout </button>
                                        </div>
                                    </div>)} </div>) : <Link to="/login" className="text-2xl hover:text-gray-400"> <IoPersonCircleSharp />  </Link>
                                    }
                            </div>
                            <Link to={"/addcart"}><li className="text-2xl"><FaShoppingBag /></li></Link></div>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar;