import { useEffect, useState, useContext, createContext } from 'react'
import { useCookies } from 'react-cookie'
import axios from '../utils/axios'
import { useRouter } from 'next/router'

import { Flip, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const errorToast = (message) => {
    toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        transition: Flip,
        autoClose:2000
    })
}

const infoToast = (message) => {
    toast.info(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        transition: Flip,
        autoClose:false
    })
}

const sucsessToast = (message) => {
    toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        transition: Flip,
        autoClose:2000
    })
}

export { errorToast, infoToast, sucsessToast };


