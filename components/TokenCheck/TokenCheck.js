import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function TokenCheck() {
    const router = useRouter()
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            router.push("/")
            return
        }
    })
}
