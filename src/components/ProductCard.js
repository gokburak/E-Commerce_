import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className=' hover:border-indigo-600  relative w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-1 space-y-2 '>
      <img onClick={()=>window.location = `detail/${item.id}`}  className='h-32 object-cover' src={item?.image} alt="" />
    <div className='font-bold h-16 text-center mt-2'>{(item?.title.substring(0,35))}</div>
    <div className='text-center opacity-70 text-sm' >{(item?.description.substring(0,35))}</div>
    <div className='font-bold text-lg'>{item?.price}</div>
    <button className=' absolute bottom-0  bg-indigo-600 w-full p-2 rounded-lg text-white '>SEPETE EKLE</button>
    </div>
  )
}

export default ProductCard
