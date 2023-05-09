import React from 'react'
import { getAllEvents } from '../../dummy-data'
import {useRouter} from 'next/router';
import EventList from '../../components/events/EventList';
import EventForm from '../../components/events/EventForm';


const AllEvent = () => {

  
  const data=getAllEvents();
  const route=useRouter();
 
  function formsubmit(year,month){
    const path=`/events/${year}/${month}`
    route.push(path);
  }
  return (
   
    <div>
      <EventForm onSearch={formsubmit}/>
    <EventList items={data}/>
  </div>
  )
}

export default AllEvent
