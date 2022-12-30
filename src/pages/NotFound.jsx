import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NotFound() {
  return (
    <Wrapper>
      <h1>Oopps! The page connot be found.</h1>
      <Link to={"/"}>Home</Link>
    </Wrapper>
  )
}

export default NotFound


const Wrapper = styled.div`
margin: auto;
width: 400px;
text-align: center;

h1{
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`