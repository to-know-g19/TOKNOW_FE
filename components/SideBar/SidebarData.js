import React from 'react'
import { IoIosBackspace } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { RiFolderUserFill} from "react-icons/ri";
import { MdGroups } from "react-icons/md";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiFillHome/>,
    className: 'nav-text',
  },
  {
    title: 'Grupos',
    path: '/grouplist',
    icon: <RiFolderUserFill/>,
    className: 'nav-text',
  },
  {
    title: 'Profesores',
    path: '/teachers',
    icon: <MdGroups/>,
    className: 'nav-text',
  },
]