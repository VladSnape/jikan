import React from 'react'
import HeroCard from './heroCard'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='flex items-center justify-center w-full'>

        <HeroCard />
    </div>
  )
}

export default Hero