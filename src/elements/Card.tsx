import React from 'react'

import unsplash01 from '../assets/images/unsplash-01.jpg'

function Card() {
  return (
    <div>
      <article className='bg-stone-50 min-h-[300px] max-w-[250px] border-2 border-slate-200 rounded-lg mr-2 mb-2 ml-2'></article>

      <article className='bg-stone-50 min-h-[396px] max-w-[355px] border-2 border-slate-200 rounded-lg mr-2 mb-2 ml-2'></article>

      <article className='bg-stone-50 min-h-[180px] max-w-[360px] border-2 border-slate-200 rounded-lg mr-2 mb-2 ml-2'></article>

      <article className='bg-stone-50 min-h-[400px] max-w-[355px] border-2 border-slate-200 rounded-lg mr-2 mb-2 ml-2'></article>

      <article className='bg-stone-50 min-h-[560px] max-w-[345px] border-2 border-slate-200 rounded-lg mr-2 mb-2 ml-2'></article>

      <div className="flex mb-10 ">
        <div className=" w-1/5 text-center ">1</div>
        <div className="bg-orange-200 hover:bg-orange-600 w-1/5 text-center">2</div>
        <div className="bg-green-200 w-1/5 text-center">3</div>
        <div className="bg-red-200 w-1/5 text-center">4</div>
        <div className=" w-1/5 text-center">5</div>
      </div>
      <div className="flex flex-wrap gap-12 justify-between ml-4 mb-4">
        <div className='w-1/5 border-2'>
          <div className='overflow-clip'>
            <img className='hover:scale-125 ease-in-out duration-300' src={unsplash01} alt="" />
          </div>
          <div className='pl-2 pb-2'>
            <h3>Some Title</h3>
            <h1>Some Subtitle</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem omnis nemo dignissimos at assumenda ducimus ratione maxime.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card