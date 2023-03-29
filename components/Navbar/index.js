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
    const [userName, setUserName] = useState("")
    const [userRole, setUserRole] = useState("")
    const [userId, setUserId] = useState("")
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("token")
        const currentPath = router.pathname
        if (token && token !== "undefined") {
            const userData = JSON.parse(atob(token.split(".")[1]))
            setUserRole(userData.role)
            setUserId(userData.id)
        } else {
            /* función para checar token. si no hay Y la ruta no es /register
             entonces empujar a home*/
            if (!token && currentPath !== "/register") {
                router.replace("/")
                return
            }
        }
    }, [])

    // console.log("soy el userName",userName)
    const handleLogOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('usrnm')
        const currentPath = router.pathname
        if (currentPath == '/') {
            window.location.reload()
        } else {
            router.push('/')
        }
    }
    //obteniendo username del localstorage para usar en sideBar
    useEffect(()=> {
        setUserName(localStorage.getItem('usrnm'))
    })

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

                    {/* Información del usuario mostrada en sideBar */}
                    <div className="userInfoSideBar">
                        <span>
                            <div className='d-flex gap-2 align-items-center '>
                                {/* <FaUserCircle className='post-announce__user-img' /> */}
                                <img className='rounded-circle post-announce__user-img'
                                    src={`https://api.dicebear.com/5.x/fun-emoji/svg?seed=${userId}`}
                                    alt="avatar"
                                />
                                <span>{userRole === "admin" ? "Administrador" : userRole === "teacher" ? "Profesor" : "Tutor"}</span>
                            </div>
                        </span>
                        {userName && userName.length > 0 &&
                            <p className="nav-text">{userName}</p>
                        }
                    </div>

                    {/* iconos con Link de sideBar */}
                    <li className="nav-text">
                        <Link href={userRole === "admin" ? "/grouplist" : userRole === "teacher" ? "/teacher/yourgroups" : "/parent/yourgroups"}>
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