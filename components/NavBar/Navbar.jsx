import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar d-flex col-lg-12 align-items-center'>
      <div className='d-flex col-lg-7 justify-content-end align-items-center'>
        <img src="/images/logotipo.svg" alt="" />
      </div>
      <div className='d-flex col-lg-5 justify-content-center align-items-center' >
        <a href="https://www.paypal.com/donate/?hosted_button_id=3UR59FW8C2UGC">
          <img className='pigContainer' src="/images/piggy.svg" alt="donate" />
        </a>
      </div>
    </nav>
  )
}
