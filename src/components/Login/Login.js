import React, { useRef, useState } from 'react';
import { Container, Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import './Login.css';
import LandingNavbar from "../LandingNavbar/LandingNavbar"
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import image from "./background.png"


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  

  return (
    <>
    <Container>
      <LandingNavbar/>
    </Container>

          <div class="column left"
            style={{
              backgroundImage: 'url('+image+')',
              // backgroundSize: "cover",
              height: "20vh",
              // width: "60vw",
            }}
            >
          </div>

        <div class="column middle">
        <Container>
          <h2 className="logoPhrase">
            <strong>The work speaks for itself, now let it speak for you!</strong>
          </h2>
        </Container>
        <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
        </div>

        <div class="column right"
          style={{
            backgroundImage: 'url('+image+')',
            // backgroundSize: "cover",
            height: "20vh",
            // width: "90vw",
          }}
          >       
        </div>

    </>
  )
}