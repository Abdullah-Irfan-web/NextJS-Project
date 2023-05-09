import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data';
import EventItem from '../../components/events/EventItem';
import classes from '../../components/events/EventList.module.css'

const FilterEvent = () => {
  const route=useRouter();
 const filter=route.query.filterEvent;

 
if(!filter){
  return(
    <p1>djiuwhdywgduy</p1>
  )
}
const year=filter[0];
const month=filter[1];
const val={
  year:+year,
  month:+month
}

 const data=getFilteredEvents(val);
  return (
    <ul className={classes.list}>
      {data.map((event) => (
        <EventItem
        key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  )
}

export default FilterEvent
