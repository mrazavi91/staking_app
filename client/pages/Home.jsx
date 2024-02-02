import React from 'react'
import Staking from '../src/components/Staking'
import StakingData from '../src/components/StakingData'

export default function Home() {
  return (
      <section className='container'>
          <Staking />
          <StakingData />
          
    </section>
  )
}
