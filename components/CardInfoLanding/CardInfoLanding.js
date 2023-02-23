/* package */
import React from 'react'

/* styles */
import 'bootstrap/dist/css/bootstrap.css'



export default function CardInfoLanding({ImgSrc, Title, Description}) {
    return (
        <div className='col-lg-2 d-flex flex-column justify-content-center  align-items-center'>
            <img className='cardImg' src={ImgSrc} alt="" />
            <h3 className='cardTitle'>{Title}</h3>
            <div className='cardDescription'>{Description}</div>
        </div>
    )
}