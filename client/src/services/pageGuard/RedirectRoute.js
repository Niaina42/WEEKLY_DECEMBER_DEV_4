import React, { useEffect } from 'react'
import { useAuth } from '../context/auth-context'
import { useNavigate } from 'react-router-dom'
import { getAuthToken } from '../token/token'

const RedirectRoute = ({ children }) => {
    const {user} = useAuth()
    const navigation = useNavigate()

    useEffect(() => {
        if(getAuthToken()) {
            navigation("/home")
        }
    }, [navigation, user])

    return(
        <>
            {user ? null: children}
        </>
    )
}

export default RedirectRoute
