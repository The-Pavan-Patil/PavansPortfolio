import React from 'react'
import { div } from 'framer-motion/client'
import {TextHoverEffect} from './ui/TextReveal'

const Plan = () => {
  return (
    <div className="h-[30rem] flex items-center justify-center">
    <TextHoverEffect text="You know the business; I know the magic." />
  </div>
  )
}

export default Plan
