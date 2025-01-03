import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bento-grid'
import { section } from 'framer-motion/client'
import { gridItems } from '@/data'

const Grid = () => {
  return (
   <section id= "about">
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