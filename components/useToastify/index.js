import React from 'react'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

const useToastify = (typeOfNotification, message)=> {
  const notify = () => {
    switch (typeOfNotification) {
      case 'success':
        toast.success(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: ,
          theme: "light",
        });
        break;
      case 'error':
        toast.error(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: ,
          theme: "light",
        });
        break;
      case 'warning':
        toast.warning(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: ,
          theme: "light",
        });
        break;
      default:
        toast.info(message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          // progress: ,
          theme: "light",
        });
    }
  };

  return notify;
}
export default useToastify
