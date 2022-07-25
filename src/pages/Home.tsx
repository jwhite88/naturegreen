import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { FaHandshake, FaHands } from 'react-icons/fa'
import { GiElephant } from 'react-icons/gi'
import { RiPlantFill } from 'react-icons/ri'
import styles from './Home.module.css'
import scenicRoute from '../assets/images/scenic-route.jpg'

function Home(): JSX.Element {
  const homeData = useSelector((state: RootState) => state.homeInfo.homeData);
  const forestData = useSelector((state: RootState) => state.homeInfo.forestData)
  const energyData = useSelector((state: RootState) => state.homeInfo.energyData)

  return (
    <div>
      <div className='h-[290px] bg-gradient-to-r from-green-400 to-green-800 flex flex-row justify-between flex-nowrap font-serif'>
        <div className=''>
          <div className='p-24 font-semibold text-slate-200 text-6xl italic  '><h1>Our Planet</h1></div>
        </div>
        <div className="w-[686px] gradient-mask-l-0" >
          <img src={scenicRoute} alt=" Scenic route" />
        </div>
      </div>

      {/* 3 x 3 */}
      <div className='mt-10 flex flex-direction-row justify-center font-serif '>
        {
          homeData?.map((home) => {
            return (
              <div key={home.id} className='min-h-[450px]'>
                <div className={home.id === 2 ? `rounded-md  border-2 border-grey-200 w-80 min-h-[440px] -mt-5 bg-green-700` :
                  `rounded-md  border-2 border-grey-200 w-80 min-h-[400px]`
                }>
                  <div className='flex flex-col items-center justify-center pt-20'>
                    <div className='pb-4'>
                      {home.icon === 'FaHands' ?
                        <FaHands className=' text-6xl text-green-800 hover:scale-125 ease-in-out duration-300' /> :
                        home.icon === 'RiPlantFill' ?
                          <RiPlantFill className=' text-6xl text-slate-100 hover:scale-125 ease-in-out duration-300' /> :
                          home.icon === 'GiElephant' ?
                            <GiElephant className=' text-6xl text-green-800 hover:scale-125 ease-in-out duration-300' /> :
                            "no data"
                      }
                    </div>
                    <div className='pb-2'>
                      {home.id === 2 ? <span className='text-2xl font-semibold  text-slate-100'>{home.title}</span> : <span className='text-2xl font-semibold '>{home.title}</span>}
                    </div>
                    <div>
                      {home.id === 2 ? <p className='text-center text-xl px-4 text-slate-100'>
                        {home.content}
                      </p> : <p className='text-center text-xl px-4 '>
                        {home.content}
                      </p>}
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        <div className="flex gap-4 justify-center items-center bg-yellow-700 min-h-[400px] text-slate-100 font-serif">
          {
            forestData.map((forest) => {
              return (
                <div key={forest.id} className=''>
                  <div className='w-[500px] h-[320px] relative'>
                    <div className="border-[1px] rounded-xl" id={forest.imageId}></div>
                    <div className="px-6 pt-3 absolute top-0 ">
                      <h3 className={forest.id === 1 ? "text-4xl text-yellow-400 pb-1" : "text-4xl text-teal-400 pb-1"}>{forest.title}</h3>
                      <h4 className="text-2xl pb-2">{forest.subtitle}</h4>
                      <div className={forest.id === 1 ? "w-12 border-b-4 border-yellow-400 mb-3 mt-2" : "w-12 border-b-4 border-teal-400 mb-3 mt-2"}></div>
                      <p> {forest.content} </p>
                      <button className={forest.id === 1 ? "text-slate-900 bg-yellow-400 hover:bg-yellow-600 rounded-md p-2 mt-4" : "text-slate-900 bg-teal-400 hover:bg-teal-600 rounded-md p-2 mt-4"}>{forest.buttonText}</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="container mx-auto mt-10 min-h-[200px] font-serif">
        <h3 className="text-2xl">Types of Renewable Energy</h3>
        <div className="w-full border-b-4 border-b-gray-200 mt-3 mb-5"></div>
        <section className="flex flex-row justify-between">
          {
            energyData?.map((energy) => {
              return (
                <div className='max-w-[250px}'>
                  <div className='overflow-clip'>
                    <img className="h-[155px] w-[250px] hover:scale-125 ease-in-out duration-300" src={require("../assets/images/" + energy.image + ".jpg")} alt={energy.title} />
                  </div>
                  <h4 className="text-xl text-green-500 mt-3">{energy.title}</h4>
                  <h5 className="text-sm mt-2">{energy.types}</h5>
                  <p className='text-[0.75rem] max-w-[250px] pt-3'>{energy.description}</p>
                </div>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default Home
