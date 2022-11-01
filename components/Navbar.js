
import Image from "next/image";
import logo from '../public/img/logos/logo.svg'

export default function Navbar({ children, title }) {
    return (
        <nav>
            <div>
                <a href=""><i class="bi bi-list"></i></a>
                <Image src={logo} alt="Logo toKnow" />
            </div>
            <div>

                <div><a href=""><i className="bi bi-bell"><span> <i className="bi bi-plus"></i></span></i></a></div>
                <div><a href=""><button>user</button></a></div>

            </div>
        </nav>
    )
}