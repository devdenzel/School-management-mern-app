import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert } from 'react-bootstrap'
import {Link, useHistory} from "react-dom"
/* import {Link, useHistory} from "react-router-dom" */


export default function Signup() {
  const passwordRef = useRef()
  const passwordConfirmRef= useRef()
  const emailRef = useRef()
  return (
    <>
    <Card>
      <Card.Body>
        <h2 className='font-bold underline'>Signsdfsf Up</h2>
        <Form>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required/>
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required/>
          </Form.Group>
          <Form.Group id='password-confirm'>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required/>
          </Form.Group>
          <button  className='w-100' type='submit' bg-green-400>Sign Up</button>
        </Form>
      </Card.Body>
    </Card>
    </>
  )
}
