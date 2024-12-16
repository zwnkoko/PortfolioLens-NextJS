'use client'

import { useState, useEffect } from "react"
import Link from "next/link";
import { motion } from "motion/react";

const Drawer = () => {
    const [ openDrawer, setOpenDrawer ] = useState(false);

    // Calculate the height of mobile nav bar
    useEffect(()=>{
        const navBar = document.getElementById("mobile-nav")
        if(navBar){
            const navHeight = navBar.offsetHeight;
            document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
        }
        else{
            console.warn("mobile nav bar id is not set. Height calculation will be inaccurate")
        }
    },[]);

    const toggleDrawer = () =>{
        setOpenDrawer(!openDrawer);
    }

    return (
        <>
        {/* Hamburger Icon */}
        <div onClick={toggleDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
        </div>

        {openDrawer && (
            <div className="absolute top-full bg-red-500 grid grid-rows-12 h-dynamic-drawer w-dynamic-drawer">
                <Link className="" href="/"> Home </Link>
                <Link href="/dashboard"> Dashboard </Link>
                <Link href="/about"> About </Link>
                <Link href="/contact"> Contact </Link>
            </div> 
        )}
        </>
    )
}

export default Drawer