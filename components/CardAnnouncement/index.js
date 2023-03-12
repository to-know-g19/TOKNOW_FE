import React from 'react'
import { FaUserCircle } from 'react-icons/fa';

export default function Index(props) {
    return (
        <div>
            <div className='d-flex flex-column mb-4 mt-3 align-items-center justify-content-center'>

                <div className='card-announce d-flex col-11 col-lg-7 bg-light'>
                    <div className='d-flex flex-column flex-lg-column col-12 col-lg-12'>
                        <div className='card-announce__img-wrapper'>
                            <image
                                className='card-announce__img-wrapper__cover-img bg-white'
                                src={props.coverimg}
                            />
                        </div>
                        <div className='d-flex'>
                            <div className='p-2 pt-lg-4 d-flex justify-content-center align-items-center '>
                                <FaUserCircle className='card-announce__user-img' />
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

                        <h4 className='p-3 p-lg-4'>
                            {props.announcementTitle}
                        </h4>
                    </div>
                </div>

            </div>
        </div>
    )
}
