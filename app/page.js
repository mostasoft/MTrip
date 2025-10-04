import React from 'react'
import Hero from './Home/Hero'
import PopularPlaces from './Home/PopularPlaces'
import TraveToMakeMemories from './Home/TraveToMakeMemories'
import Explore from './Home/Explore'
import Adventure from './Home/Adventure';
import BookNow from './Home/BookNow'
import Faqs from './Home/Faqs'

const page = () => {
  return (
    <div>
      <Hero/>
      <PopularPlaces/>
      <TraveToMakeMemories/>
      <Explore/>
      <Adventure/>
      <BookNow/>
      <Faqs/>
    </div>
  )
}

export default page
