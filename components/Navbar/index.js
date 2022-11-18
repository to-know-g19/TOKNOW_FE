/* default */
import Image from "next/image"
import Link from 'next/link'

/* images*/
import logo from '../../public/img/logos/logo.svg'

/* styles */
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Navbar() {
    return (
        <div className="navigation d-flex col-lg-12 justify-content-center">
        <nav className=" d-flex col-lg-11 justify-content-between">
            <div className="d-flex  align-items-center">
                <a href=""><i className="bi bi-list"></i></a>
               <Link href="/"> <Image src={logo} alt="Logo toKnow" /> </Link>
            </div>
            <div className="d-flex  justify-content-center align-items-center">
                <div><a href=""><i className="bi bi-bell"><span> <i className="bi bi-plus"></i></span></i></a></div>
                <Link href="" label='user'>user</Link>
            </div>
        </nav>
        </div>
    )
}