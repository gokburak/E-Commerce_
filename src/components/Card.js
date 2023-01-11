import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch } from 'react-redux'

const Card = () => {
  const dispatch  =useDispatch()
  return (
    <div className="w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3">
      <div className="flex items-center justify-between h-20 ">
        <h1 className="text-2xl">Sepetim:</h1>
        <AiOutlineClose onClick={()=>dispatch({type:"DRAWER",payload:false})} size={25} className="cursor-pointer" />
      </div>

      <div className="h-28 flex items-center justify-between">
        <img className='h-24' src="https://cdn05.e-bebek.com/mnresize/1600/1600/media/p/muslin-5li-askili-hastane-cikisi_8682766195866_01.jpg" alt="img" />
        <div className='w-44'>
          <div className='font-bold text-sm' >fenerbahçe</div>
          <div className='opacity-70 text-sm'>fenerbahçe 1907</div>
        </div>
        <div className='font-bold text-lg'>200.00</div>
        <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
      </div>
      <div className="h-28 flex items-center justify-between">
        <img className='h-24' src="https://cdn05.e-bebek.com/mnresize/1600/1600/media/p/muslin-5li-askili-hastane-cikisi_8682766195866_01.jpg" alt="img" />
        <div className='w-44'>
          <div className='font-bold text-sm' >fenerbahçe</div>
          <div className='opacity-70 text-sm'>fenerbahçe 1907</div>
        </div>
        <div className='font-bold text-lg'>200.00</div>
        <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
      </div>
      <div className="h-28 flex items-center justify-between">
        <img className='h-24' src="https://cdn05.e-bebek.com/mnresize/1600/1600/media/p/muslin-5li-askili-hastane-cikisi_8682766195866_01.jpg" alt="img" />
        <div className='w-44'>
          <div className='font-bold text-sm' >fenerbahçe</div>
          <div className='opacity-70 text-sm'>fenerbahçe 1907</div>
        </div>
        <div className='font-bold text-lg'>200.00</div>
        <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
      </div>
      <div className="h-28 flex items-center justify-between">
        <img className='h-24' src="https://cdn05.e-bebek.com/mnresize/1600/1600/media/p/muslin-5li-askili-hastane-cikisi_8682766195866_01.jpg" alt="img" />
        <div className='w-44'>
          <div className='font-bold text-sm' >fenerbahçe</div>
          <div className='opacity-70 text-sm'>fenerbahçe 1907</div>
        </div>
        <div className='font-bold text-lg'>200.00</div>
        <div className='bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer'>Sil</div>
      </div>

    </div>
  )
}

export default Card
