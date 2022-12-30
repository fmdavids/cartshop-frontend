import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { useGetAllProductsQuery } from '../feature/productApi'
import styled from 'styled-components'
import { addToCart } from '../feature/cartSlice';

function Home() {
    const {data, error, isLoading} = useGetAllProductsQuery()
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      navigate('/cart')
    }
  return (
  <Container>
      {isLoading ? <p>Loading...</p> : error ? <p>An error has occur</p> : <>
        <H1>New Arrivals</H1>
        <Wrapper>
          {data?.map( product =>(
            <>
            <MappedProduct key={product.id.toString()} className="">
              <h3>{product.name}</h3>
              <MappedImage>
              <img src={product.image} alt={product.name} />
              </MappedImage>
              <DescPrice>
                <Spanned> {product.desc}</Spanned>
                <SpannedPrice> ${product.price}</SpannedPrice>
              </DescPrice>
                <button onClick={() => handleAddToCart(product)}>
                Add to Cart
                </button>
            </MappedProduct>
            </>
          ))}
        </Wrapper>
      </> }
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  height: 70vh;
  margin: auto;

`

const H1 = styled.h1`
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  margin-top: 100px;
  padding: 10px 0;
`
const Wrapper = styled.div`
width: 80%;
display: flex;
flex-wrap: wrap;
margin: 5px auto;
`
const MappedProduct = styled.div`
  width: 300px;
  margin: 5px auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: -2px -2px #888288, 5px 5px #6f77e6;

`

const MappedImage = styled.div`
display: flex;
justify-content: center;

img{
  width: 60%;
  max-width: 80%;
  object-fit: contain;
  
}
`
const DescPrice = styled.div`
  display: flex;
  justify-content: space-between;
`

const Spanned = styled.span`
  width: 250px;
  padding: 0 5px;
  text-align: left;
  `
const SpannedPrice = styled(Spanned)`
width: 100px;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
`