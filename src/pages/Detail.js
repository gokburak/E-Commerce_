import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { productActionDetail } from '../redux/actions/productAction'
import { CgMathMinus, CgMathPlus } from "react-icons/cg"
const Detail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { product } = useSelector(state => state.product)
  const [count, setCount] = useState(0)


  useEffect(() => {
    dispatch(productActionDetail(id))

  }, [dispatch])
  console.log(product);

  const increment = (stock) => {
    if (count <= stock) {
      setCount(count + 1)
    }
  }
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className='w-full'>
      <img className='w-1/3' src={product?.image} alt="" />
      <div className='w-2/3'>
        <div className='font-bold text-2xl'> {product?.title}</div>
        <div className='opacity-70'> {product?.description}</div>
        <div className='opacity-70'>Category: {product?.category}</div>
        <div className='font-bold text-2xl'>Rate: {product?.rating?.rate} - Stock: {product?.rating?.count} </div>
        <div className="font-bold text-xl">Fiyat:{product?.price}</div>
        <div className="flex items-center space-x-4">
          <CgMathMinus onClick={() => increment(product?.rating?.count)} className="cursor-pointer border rounded-full p-1" size={30} />
          <span className="text-2xl">0</span>
          <CgMathPlus onClick={decrement} className="cursor-pointer border rounded-full p-1 " size={30} />
        </div>
      </div>
    </div>
  )
}

export default Detail







