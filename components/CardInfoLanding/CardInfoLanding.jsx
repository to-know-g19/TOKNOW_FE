import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function CardInfoLanding({ImgSrc, Title, Description}) {
    return (
        <div className='col-lg-2 d-flex flex-column justify-content-around  align-items-center'>
            <img src="" alt="" />
            <h3 className='cardTitle'>{Title}</h3>
            <div className='cardDescription'>{Description}</div>
        </div>
    )
}
