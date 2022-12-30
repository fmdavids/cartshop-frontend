import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import styled from 'styled-components'


// import { addToCart} from '../feature/cartSlice'

function Navbar() {
  const { cartTotalQuantity } = useSelector(state => state.cart)
  
  return (
    <Container>
      <nav>
        <Link to="/">
            <div className='cartShop-logo'>ShoppingCart</div>
        </Link>
      <CartWrapper>
        <Link to="/cart">
            <HiOutlineShoppingCart />
        </Link>
        <span>{cartTotalQuantity}</span>
      </CartWrapper>
      </nav>
    </Container>
  )
}

export default Navbar

const Container = styled.nav`
width: 100%;
font-size: 28px;
position: fixed;
top: 0;
z-index: 1000;
background: #c6c6f0;
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
}

a{
  text-decoration: none;
  font-weight: 700;
  color: black;
  padding-right: 5px;
}
`
const CartWrapper = styled.div`
font-size: 28px;
position: relative;

span{
  width: 8px;
  height: 8px;
  background: red;
  padding: 5px;
  color: white;
  font-size: 18px;
  position: absolute;
  top: -20%;
  right: -20%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
`
