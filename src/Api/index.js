import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"

export const token = localStorage.getItem("token")


export const usePost = () => {
    const navigate = useNavigate()
    const [data, setData] = useState()
    const [successfulPost, setSuccessfulPost] = useState(false)
    const [timeLeft, setTimeLeft] = useState(100);
    const [error, setError] = useState([])
    const handleSubmit = async (url, formData, route) => {
        setSuccessfulPost(false)
        const formDataToSend = new FormData()
        for (const [key, value] of Object.entries(formData)) {
            formDataToSend.append(key, value)
        }
        await axios.post(url, formDataToSend, {
            headers: {
                Accept: "application/json",
            }
        }).then(res => {
            setError([])
            setSuccessfulPost(true)
            setData(res.data);
            localStorage.setItem("token", res?.data?.token)
            if (route) {
                navigate(route)
                window.location.reload()
            }
        }).catch(err => {
            if (err?.response) {
                if (err?.response?.data?.errors) setError(err?.response?.data?.errors)
                else if (err?.response?.data?.message) setError([err?.response?.data?.message])
                else console.log(err.message)
            }
        })
    }
    const logout = (url) => {
        setSuccessfulPost(false)
        axios.post(url, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            }
        })
            .then(res => {
                setError([])
                setSuccessfulPost(true)
                navigate("/")
            })
            .catch(err => {
                if (err?.response?.data?.errors) setError(err?.response?.data?.errors)
                else if (err?.response?.data?.message) setError([err?.response?.data?.message])
                else console.log(err.message)
            })
    }
    const resendCode = (url) => {
        setSuccessfulPost(false)
        axios.post(url, {}, {
            headers: {
                Accept: "application/json",
            }
        })
            .then(res => {
                setError([])
                setSuccessfulPost(true)
            })
            .catch(err => {
                if (err?.response?.data?.errors) setError(err?.response?.data?.errors)
                else if (err?.response?.data?.message) setError([err?.response?.data?.message])
                else console.log(err.message)
            })
    }
    const refreshToken = (url) => {
        setSuccessfulPost(false)
        axios.post(url, {}, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setError([])
                setSuccessfulPost(true)
                localStorage.setItem("token", res?.data?.access_token)
                setTimeLeft(100)
                window.location.reload()
            }
            )
            .catch(err => {
                if (err?.response?.data?.errors) setError(err?.response?.data?.errors)
                else if (err?.response?.data?.message) setError([err?.response?.data?.message])
                else console.log(err.message)
            })
    }
    return { data, handleSubmit, logout, resendCode, refreshToken, successfulPost, timeLeft, setTimeLeft, error, setError }
}
