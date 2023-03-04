import React from 'react'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

const useToastify = (message)=> {
    const notify = () => 
    toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        // progress: ,
        theme: "light",
        });;

  return (notify)
  
}
export default useToastify
