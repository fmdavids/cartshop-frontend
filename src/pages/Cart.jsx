import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotals } from '../feature/cartSlice'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import styled from 'styled-components'
import { useEffect } from 'react'


function Cart() {
const cart = useSelector(state => state.cart)
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getTotals())
}, [cart, dispatch])

const handleRemoveItem = (cartItem) => {
  dispatch(removeFromCart(cartItem));
}
const handleDecreaseCart = (cartItem) => {
  dispatch(decreaseCart(cartItem));
}
const handleIncreaseCart = (cartItem) => {
  dispatch(addToCart(cartItem));
}
const handleClearCart = () => {
  dispatch(clearCart());
}



  return (
    <Container>
      <Header className="">
      <h1>Shopping Cart</h1>
      </Header>
      
      <div className="">
      { cart.cartItems.length === 0 ? (
      <CartEmpty>
        <div>
          <p>Your cart is currently empty</p>
        </div>
        <div>
          <Link to="/">
            <BsArrowLeft />
            <span>Start shopping</span>
          </Link>
        </div>
      </CartEmpty>) : (<CartContainer>
        <CartMapped className="">
          <h3>product</h3>
          <h3>price</h3>
          <h3>quantity</h3>
          <h3>Total</h3>
        </CartMapped>
        <div>
            {cart.cartItems.map(cartItem => (
              <CartMapped className="" key={cartItem.id}>
                <CartProduct className="">
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div>
                  <h3>{cartItem.name}</h3>
                  <p>{cartItem.desc}</p>
                  <button onClick={() => handleRemoveItem(cartItem)}>Remove Item</button>
                  </div>
                </CartProduct>
                <div className="price">${cartItem.price}</div>
                <div className="">
                  <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                  <span>{cartItem.cartQuantity}</span>
                  <button onClick={() => {handleIncreaseCart(cartItem)}}>+</button>
                </div>
                <div className="totalPrice">
                  {cartItem.price * cartItem.cartQuantity}
                </div>
              </CartMapped>
            ))}
        </div>
        <LowerInfo>
          <Link to={'/cart'}>
            <Clear onClick={() => { handleClearCart()}}>
            Clear
            </Clear>
            </Link>
          <div className="">
            <Subtotal>
            <span>Subtotal</span>
            <span>${cart.cartTotalAmount}</span>
            </Subtotal>
            <p>Shipping cost and taxes are calculated at checkout</p>
            <LowerInfoReturn className="">
              <Link to={`/`}>
              <button>Check out</button>
              <Shop>
              <BsArrowLeft />
              <p>Countinue Shopping</p>
              </Shop>
              </Link>
            </LowerInfoReturn>
          </div>
        </LowerInfo>
        </CartContainer>) }
      </div>
    </Container>
  )
}

export default Cart


const CartProduct = styled.div`
padding-left: -20px;
display: flex;
/* justify-content: space-between; */

img{
  width: 40%;
}
p{
  font-size: 14px;
  padding-right: 10px;
}
`
const Subtotal = styled.div`
font-size: 20px;
font-weight: 700;
display: flex;
justify-content: space-between;
align-items: center;
span{
  padding-left: 10px;
}
`
const Clear = styled.span`
padding: 10px 30px;
border: 1px solid gray;
border-radius: 10px;

`
const Shop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`
const LowerInfoReturn = styled.div`
a{display: flex;
  flex-direction: column;
justify-content: space-around;
/* align-items: center; */
text-decoration: none;
}
`
const LowerInfo = styled.div`
padding: 20px 10px;
display: flex;
justify-content: space-between;
a{text-decoration: none;
  font-size: 18px;
  /* display: flex; */
  font-weight: 400;
  button{padding: 15px 50px;
    border: 1px solid gray;
    border-radius: 10px;
  background: #c6c6f0;
  /* color: white; */
}
}
`
const CartContainer = styled.div`

`
const CartMapped = styled.div`
padding: 20px 5px;
border-bottom: 1px solid gray;
display: grid;
align-items: center;
grid-template-columns: 3fr 1fr 1fr 1fr;

button{
  background: #e3f1c7;
}
`
const CartEmpty = styled.div`
width: 300px;
margin: 0 auto;
font-size: 24px;
text-align: center;
padding: 10px 0;
a {
  text-decoration: none;
  span{
    padding-left: 20px;
    
  }
}

`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  /* background: gray; */

`
const Header = styled.div`
margin-top: 100px;
  h1{
    text-align: center;
  }
  

`