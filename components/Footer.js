import Image from "next/image";
import logo from '../public/img/logos/logo.svg'
export default function Footer({ children , title}) {
    return (
      <div>
        <div>
        <Image src={logo} alt="Logo toKnow" />
        </div>
        <div><a href="#">Derechos reservados</a> | <a href="#">aviso de privacidad</a>
        </div>
      </div>
    )
  }