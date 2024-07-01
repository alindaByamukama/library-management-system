import React, { useState } from 'react';
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', { email, password})
            // handle successful login with save token, redirect etc
        } catch (error) {
            setError('Invalid email or password')
        }
    }
}