/* default */
import Image from "next/image"
import Link from 'next/link'
/* images*/
import logo from '../../public/img/logos/logo.svg'
/* styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { IoIosBackspace } from "react-icons/io";
import { SidebarData } from "../SideBar/SidebarData";


export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        // removí el primer d-flex para pruebas
        <div className="navigation col-lg-12 ">

            <div className="d-flex col-lg-2 justify-content-center  align-items-center">
                <div className="navigation__navmenuBG d-flex justify-content-center  align-items-center">
                    <a onClick={showSidebar} href="#">
                        <i className=" bi bi-list"></i>
                    </a>
                </div>
            </div>
            
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link href="/" className="menu-bars">
                            <IoIosBackspace />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link href={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav> 
            
            {/* LOGO ToKnow */}
            <div className="d-flex col-lg-8 justify-content-center align-items-center">
                <Link href="/"> <Image src={logo} alt="Logo toKnow" /> </Link>
            </div>
            

            {/* <div className="d-flex  justify-content-center align-items-center">
                    <div><a href=""><i className="bi bi-bell"><span> <i className="bi bi-plus"></i></span></i></a></div>
                    <Link href="" label='user'>user</Link>
                </div> */}

        </div>
    )
}