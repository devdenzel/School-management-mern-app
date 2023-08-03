// eslint-disable-next-line
import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert } from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function Signup() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const passwordRef = useRef()
  const passwordConfirmRef= useRef()
  
  const emailRef = useRef()
  const { signup } = useAuth()
  
  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Password do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to set up and account')
    }
    setLoading(false)
  }
  
  return (
    <>
    <Card>
      <Card.Body className='m-5 text-center bg-slate-50 w-1/2 rounded-md leading-10 py-20 mx-auto shadow-md'>
        <h2 className='font-bold text-3xl'>Sign Up</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit} className='m-5 leading-10'>
          <Form.Group id='email'>
            <Form.Label >Email :</Form.Label>
            <input className='m-2 border-b-2 bg-white px-1' type="email" ref={emailRef} required placeholder='Enter Email'/>
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label> Password:  </Form.Label>
            <input className='m-2 border-b-2 bg-white px-1' type="password" ref={passwordRef} required/>
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label> Password:  </Form.Label>
            <input className='m-2 border-b-2 bg-white px-1' type="password" ref={passwordConfirmRef} required/>
          </Form.Group>
          <button disabled={loading} className='hover:bg-gray-800 text-white bg-green-400 rounded-md px-5 py-1' type='submit'>Sign Up</button>
        </Form>
      </Card.Body>
    </Card>
    </>
  )
}
