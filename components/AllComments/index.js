import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
// import { useRouter } from 'next/router';

export default function AllComments(props) {


    return (
        <div>
            <div className='d-flex flex-column justify-content-center  align-items-center mb-4 w-100 text-break'>

                <div className='post-announce d-flex col-11 col-lg-11 bg-light'>
                    <div className='d-flex flex-column flex-lg-column col-12 col-lg-12'>

                        <div className='d-flex '>
                            {/* removí p-2 */}
                            <div className='p-2 pt-lg-2 d-flex justify-content-center align-items-center '>
                                <FaUserCircle className='post-announce__user-img' />
                            </div>

                            <div className='d-flex flex-column '>
                                <div className='pt-3'>
                                    {props.userName}
                                </div>
                                <div>
                                    {props.date}
                                </div>
                            </div>

                            <div className='d-flex pt-3 p-2 p-lg-3 '>
                                {props.role}
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <p className='col-11 '>
                                {/* removí padding */}
                                {props.textInfo}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
