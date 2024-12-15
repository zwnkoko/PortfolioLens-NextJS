'use client'

import { useState } from "react"
import Link from "next/link";

const Drawer = () => {
    const [ openDrawer, setOpenDrawer ] = useState(false);

    const toggleDrawer = () =>{
        setOpenDrawer(!openDrawer);
    }

    return (
        <>
        {/* Hamburger Icon */}
        <button onClick={toggleDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
        </button>

        {openDrawer && (
            <div className="absolute top-full w-full bg-theme-color">
                <div className="space-y-4 flex flex-col">
                    <Link href="/"> Home </Link>
                    <Link href="/dashboard"> Dashboard </Link>
                    <Link href="/about"> About </Link>
                    <Link href="/contact"> Contact </Link>
                </div>
            </div> 
        )}
        </>
    )
}

export default Drawer