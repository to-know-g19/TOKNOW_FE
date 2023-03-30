import React from 'react'
import Link from 'next/link'
import { BsArrowLeftCircle } from 'react-icons/bs';
import GroupInfoCircle from '../GroupInfoCircle';
import { useRouter } from 'next/router';

export default function ArrowGoBack({ btnTxtModal, btnTxtModal2nd, btnTxtModal3, route }) {
    const router = useRouter()
    return (
        <div className='d-flex pt-1 col-12 col-lg-12 justify-content-center'>
            <div className='d-flex col-11 col-lg-10 justify-content-between align-items-baseline'>
                <div className='d-flex col-lg-6 align-items-center flex-wrap'>
                    <div>{router.query.groupId && <GroupInfoCircle/>}</div>
                    <div>{btnTxtModal}</div>
                    <div>{btnTxtModal2nd}</div>
                    <div>{btnTxtModal3}</div>
                </div>
                {/* <div>
                    <GroupInfoCircle/>
                </div> */}
            </div>
        </div>
    )
}
