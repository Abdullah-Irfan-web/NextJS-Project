import React from 'react'
import EventList from '../components/events/EventList'
import  {getFeaturedEvents}  from '../dummy-data'
import NewsLetterRegistration from '../components/input/newsletter-registration'

const Homepage = () => {
    const featured=getFeaturedEvents()
  return (
    <div>
      <NewsLetterRegistration/>
      <EventList items={featured}/>
    </div>
  )
}

export default Homepage
