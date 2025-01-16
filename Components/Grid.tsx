import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
   <section id= "about" className='mt-10'>
    <div className='mb-10'>
    <h1 className=" heading ">
        What&apos;s in my{" "}
        <span className="text-purple">Spellbook</span>
      </h1>  
    </div>
    <BentoGrid>
        {gridItems.map(({id,title,description,imgClassName,titleClassName,spareImg,className,img,}) => (
            <BentoGridItem
            id= {id}
            key= {id}
            title= {title}
            description= {description}
            className={className}
            img={img}  
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            
            />
        ))}
    </BentoGrid>
   </section>
  )
}

export default Grid