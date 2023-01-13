import React from 'react'
import Link from 'next/link'
import { BsArrowLeftCircle } from 'react-icons/bs';

export default function ArrowGoBack({btnTxtModal, route}) {

    return (
        <div className='d-flex col-lg-12 justify-content-center'>
            <div className='d-flex col-lg-10 justify-content-between align-items-baseline'>
                {/* <div>datos variantes como un botón o mensaje e.g. "Datos del profesor"</div> */}
                <div>{btnTxtModal}</div>
                <Link href={route} className='arrow-go-back '><BsArrowLeftCircle /></Link>
            </div>
        </div>
    )
}
