import React from 'react'
import Link from 'next/link'
import { BsArrowLeftCircle } from 'react-icons/bs';

export default function ArrowGoBack({btnTxtModal, route}) {

    return (
        <div className='d-flex col-12 col-lg-12 justify-content-center'>
            <div className='d-flex col-11 col-lg-10 justify-content-between align-items-baseline'>
                <div>{btnTxtModal}</div>
                <Link href={route} className='arrow-go-back '><BsArrowLeftCircle /></Link>
            </div>
        </div>
    )
}
