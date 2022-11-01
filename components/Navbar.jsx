
import Image from "next/image";

export default function Navbar({ children , title}) {
    return (
      <nav>        
        <div>
        <a href=""><i class="bi bi-list"></i></a>
            <Image
                    src="/logo-tknow.svg"
                    alt="Logo toKnow"
                    height="290"
                    width="56"
                /></div>
        <div>
        
        <div><a href=""><i class="bi bi-bell"></i></a>
        </div>
      
        </div>
      </nav>
    ) 
  }