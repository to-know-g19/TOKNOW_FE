/* default */
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from "next/router"
/* images*/
import logo from '../../public/img/logos/logo.svg'
/* styles */
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from "react"
//icons
import { SlClose } from "react-icons/sl"
import { FaBars } from "react-icons/fa"
import { SidebarData } from "../SideBar/SidebarData"
import { GoSignOut } from "react-icons/go"
import { AiFillHome } from "react-icons/ai";

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const [userRole, setUserRole] = useState("")
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("token")
        const currentPath = router.pathname
        if (token && token !== "undefined") {
            const userData = JSON.parse(atob(token.split(".")[1]))
            setUserRole(userData.role)
        } else {
            /* función para checar token. si no hay Y la ruta no es /register
             entonces empujar a home*/
            if (!token && currentPath !== "/register") {
                router.replace("/")
                return
            }
        }
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem('token')
        const currentPath = router.pathname
        if (currentPath == '/') {
            window.location.reload()
        } else {
            router.push('/')
        }
    }

    return (

        <div className="navigation d-flex col-12 col-lg-12 ">

            <div className="d-flex col-2 col-lg-2 justify-content-center  align-items-center">
                {(userRole) ?
                    <Link onClick={showSidebar} href="#">
                        <div className="navigation__navmenuBG d-flex justify-content-center  align-items-center">

                            <FaBars />
                        </div>
                    </Link> : null
                }
            </div>

            {/* SIDEBAR */}
            <nav className={sidebar ? 'nav-menu active border-right' : 'nav-menu'} >
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <a className="menu-bars">
                            <SlClose />
                        </a>
                    </li>

                    <li className="nav-text">
                        <Link href={userRole ==="user" ? "/grouplist" : userRole ==="teacher" ? "/teacher/yourgroups" : "/parent/yourgroups"}>
                            <AiFillHome />
                            <div className="nav-span">Grupos</div>
                        </Link>
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
                    <li className="nav-text" onClick={handleLogOut}>
                        <Link href={"/"}>
                            <GoSignOut />
                            <div className="nav-span">Cerrar sesión</div>
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* LOGO ToKnow */}
            <div className="d-flex col-8 col-lg-8 justify-content-center align-items-center">
                <Link href="/"> <Image src={logo} alt="Logo toKnow" /> </Link>
            </div>
        </div>
    )
}