import React from 'react'
import Link from 'next/link'
import { BsArrowLeftCircle } from 'react-icons/bs';

export default function ArrowGoBack() {
    return (
        <div className='d-flex col-lg-2'>
            <Link href={"/grouplist"} className='arrow-go-back '><BsArrowLeftCircle /></Link>
        </div>
    )
}
