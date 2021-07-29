import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from "react-router-dom";
import ProlioNavbar from "../Navbar/Navbar";
import "./Settings.css";


export default function Settings() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const jobTitle = useRef()
  const fullName = useRef()
  const profPic = useRef()
  const { currentUser, updatePassword, updateEmail, updateProfile } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }
    promises.push(updateProfile(fullName, profPic))

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
      console.log("user's email: "+currentUser.email)
      console.log("user's display name: "+currentUser.displayName)
      console.log("user's photo URL: "+currentUser.photoURL)
      console.log("user's verified email: "+currentUser.emailVerified)
  }

  return (
    <>
     <ProlioNavbar />
     <div className="passwordContainer" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Settings: Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Profile Picture</Form.Label>
              <Form.Control 
                type="file"
                ref={profPic}
               />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Make sure Password matches"
              />
            </Form.Group>
            <Form.Group id="fullname">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                ref={fullName}
                placeholder="Enter full name"
              />
            </Form.Group>
            <Form.Group id="jobtitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                ref={jobTitle}
                placeholder="Enter Job Title"
              />
            </Form.Group>
            <Link to="/MyProfile">
              <Button disabled={loading} className="w-100" type="submit">
                Update
              </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </div>
    </>
  )
}

