import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { productAction } from '../redux/actions/productAction'

const Home = () => {
  const { products } = useSelector(state => state.products)
const dispatch = useDispatch()
  useEffect(() => {

    dispatch(productAction())

  }, [dispatch])
  console.log(products);

  return (
    <div className="flex flex-wrap justify-center">
     {
      products && products.map((item,i)=>(
        <ProductCard key={i} item={item} />
      ))
     }
    </div>
  )
}

export default Home
