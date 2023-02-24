/* default */
import Image from "next/image"
import Link from 'next/link'
/* images*/
import logo from '../../public/img/logos/logo.svg'
/* styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { FaBars } from "react-icons/fa";
import { SidebarData } from "../SideBar/SidebarData";


export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const [userRole, setUserRole] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const userData = JSON.parse(atob(token.split(".")[1]));
            setUserRole(userData.role)
        }
    }, [])

    return (

        <div className="navigation d-flex col-lg-12 ">

            <div className="d-flex col-lg-2 justify-content-center  align-items-center">
                {(userRole == "admin") ?
                    <Link onClick={showSidebar} href="#">
                        <div className="navigation__navmenuBG d-flex justify-content-center  align-items-center">

                            <FaBars />
                        </div>
                    </Link> : <p></p>
                }
            </div>

            {/* SIDEBAR */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <a className="menu-bars">
                            <SlClose />
                        </a>
                    </li>

                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link href={item.path}>
                                    {item.icon}
                                    <span className="nav-span">{item.title}</span>
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