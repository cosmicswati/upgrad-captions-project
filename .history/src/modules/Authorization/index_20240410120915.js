import React from 'react'
import Form from './Form'

const Auth = () => {
  const isSigninPage = window.location.pathname.includes('signin')
  return (
    <div>
      <Form/>
    </div>
  )
}

export default Auth
