import Image from "next/image";
import logo from '../../public/img/logos/logo.svg'
export default function Footer({ children, title }) {
  return (
    <div className="footer d-flex">
      <div className="d-flex col-lg-6 justify-content-center">
        <Image src={logo} alt="Logo toKnow" />
      </div>
      <div className="d-flex col-lg-6 justify-content-center align-items-center">
        <a href="#">Derechos reservados</a> | <a href="#">aviso de privacidad</a>
      </div>
    </div>
  )
}