import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import CommentBox from '../CommentBox';

export default function PostAnnouncement(props) {
    return (
        <div>
            <div className='d-flex flex-column mb-4 mt-3 align-items-center justify-content-center'>

                <div className='post-announce d-flex col-11 col-lg-7 bg-light'>
                    <div className='d-flex flex-column flex-lg-column col-12 col-lg-12'>
                        <div className='d-flex justify-content-center post-announce__img-wrapper'>
                            <img
                                className='post-announce__img-wrapper__cover-img img-fluid'
                                src={props.coverimg || `https://picsum.photos/800/300`}
                            />
                        </div>
                        <div className='d-flex p-2'>
                            <div className='p-2 pt-lg-2 d-flex justify-content-center align-items-center '>

                                <img className='rounded-circle post-announce__user-img '
                                    src={`https://api.dicebear.com/5.x/fun-emoji/svg?seed=${props.userId}`}
                                    alt="avatar"
                                />
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

                        <h4 className='p-3 p-lg-4 pb-lg-0'>
                            {props.announcementTitle}
                        </h4>

                        <p className='p-4 pb-5'>
                            {props.textInfo}
                        </p>
                        {props.component}
                        {props.component2}
                    </div>
                </div>

            </div>
        </div>
    )
}
