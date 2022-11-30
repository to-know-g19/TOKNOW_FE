/* Default */
import Image from "next/image";

/* images */
import logo from '../../public/img/logos/logo.svg'

export default function Footer() {
  return (
    <div className="footer d-flex align-self-end">
      <div className="d-flex col-lg-6 justify-content-center align-items-center">
        <Image src={logo} alt="Logo toKnow" />
      </div>
      <div className="d-flex col-lg-6 justify-content-center align-items-center">
        <a href="#">Derechos reservados</a> | <a href="#">Aviso de privacidad</a>
      </div>
    </div>
  )
}