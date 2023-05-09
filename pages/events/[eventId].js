import React, { Fragment } from 'react'

import { useRouter } from 'next/router'
import {getEventById} from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import Comments from '../../components/input/comments'
import { getFeaturedEvents } from '../../dummy-data'

const Eventdetail = () => {
    const router=useRouter();
    const id=router.query.eventId;
    const iddata=getEventById(id);
    if(!iddata){
        return(
            <p>No Event Found</p>
        )
    }
  return (
   <Fragment>
    <EventSummary title={iddata.title}/>
    <EventLogistics date={iddata.date} address={iddata.location} image={iddata.image} imageAlt={iddata.title}/>
    <EventContent>
        <p>
            {iddata.description}
        </p>
    </EventContent>
    <Comments eventId={iddata.id}/>
   </Fragment>
  )
}
export async function getStaticProps(context) {
    const eventId = context.params.eventId;
  
    const event = await getEventById(eventId);
  
    return {
      props: {
        selectedEvent: event
      },
      revalidate: 30
    };
  }
  
  export async function getStaticPaths() {
    const events = await getFeaturedEvents();
  
    const paths = events.map(event => ({ params: { eventId: event.id } }));
  
    return {
      paths: paths,
      fallback: 'blocking'
    };
  }
  

export default Eventdetail
