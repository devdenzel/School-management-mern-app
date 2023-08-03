/* import React, {useRef, useState} from "react";
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from "react-router-dom"
import { Form, Button, Card, Alert } from "react-bootstrap"


import React from 'react'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser, updatePassword, updateEmail} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] =useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordConfirmRef.current.value)
            history.push('/')

        } catch {
            setError("Failed to sign in")
        }
        setLoading(false)
    }

    return (
        <>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-cente mb-4">PUpdate Profile</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <div id="email">
                            <h1>Email</h1>
                            <input type="email" ref={emailRef} required defaultValue={currentUser.email}/>
                        </div>
                        <input id="password">
                            <Form.Label>password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same"/>
                        </input>
    
                        <Button disabled={loading} className="w-100" type="submit">Update
    
                        </Button>
                    </form>
    
                    <div className="w-100 text-center mt-3">
                        <Link to="/reset"></Link>
                    </div>
    
                </div>
                    
            </div>
            <div className="w-100 text-center mt-2">
                <Link to='/signup'>
                </Link>
            </div>
        </>
      )
    }
     */