import { workExperience } from '@/data'
import React from 'react'
import {Button} from './ui/MovingBorder'

const WorkExperience = () => {
  return (
    <div className="py-20">
      <h1 className=" heading ">
        My { ' '}
        <span className="text-purple">Work Experience</span>
      </h1>
      <div className="mt-12 w-full grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((cards)=>(
            <Button key={cards.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            >
                <div className='flex '>
                    <img src={cards.thumbnail} alt={cards.thumbnail} 
                    className='lg:w-32 md:w-20 w-16'  />
                    <div className='lg:ms-5'>
                    <h1 className='className="text-start text-xl md:text-2xl mt-3 font-bold'>
                        {cards.title}
                    </h1>
                    <p className='className="text-start text-white-100 mt-3 mb-3 font-semibold'>
                        {cards.desc}
                    </p>
                    </div>
                </div>
            </Button>
        ))}
        </div>
        </div>
  )
}

export default WorkExperience