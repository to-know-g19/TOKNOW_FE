
import Image from "next/image";
import logo from '../../public/img/logos/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar({ children, title }) {
    return (
        <nav className="navigation d-flex col-lg-12 justify-content-around">
            <div className="d-flex  align-items-center">
                <a href=""><i className="bi bi-list"></i></a>
                <Image src={logo} alt="Logo toKnow" />
            </div>
            <div className="d-flex  justify-content-center align-items-center">
                <div><a href=""><i className="bi bi-bell"><span> <i className="bi bi-plus"></i></span></i></a></div>
                <div><a href=""><button>user</button></a></div>

            </div>
        </nav>
    )
}