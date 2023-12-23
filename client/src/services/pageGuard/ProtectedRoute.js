import React, { useEffect } from 'react'
import { useAuth } from '../context/auth-context'
import { useNavigate } from 'react-router-dom'
import { getAuthToken } from '../token/token'

const ProtectedRoute = ({ children }) => {
    const {user} = useAuth()
    const navigation = useNavigate()

    useEffect(() => {
        if(!getAuthToken()) {
            navigation("/")
        }
    }, [navigation, user])

    return(
        <>
            {user ? children : null}
        </>
    )
}

export default ProtectedRoute