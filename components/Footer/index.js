/* Default */
import Image from "next/image";

/* images */
import logo from '../../public/img/logos/logo.svg'

export default function Footer() {
  return (
    <div className="footer d-flex flex-lg-row flex-column col-12 justify-content-center align-self-end">
      
      <div className="d-flex col-lg-6 justify-content-center justify-content-lg-start align-items-center">
        <Image src={logo} alt="Logo toKnow" />
      </div>

      <div className="d-flex col-12 col-lg-6 justify-content-center justify-content-lg-end align-items-center">
        <a className="d-flex col-5 justify-content-end col-lg-3" href="#">Derechos reservados</a> 
        <span className="d-flex col-1 justify-content-center col-lg-1" href="#">|</span> 
        <a className="d-flex col-5 col-lg-3" href="#"> Aviso de privacidad</a>
      </div>
      
    </div>
  )
}