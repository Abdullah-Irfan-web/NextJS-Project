import Link from 'next/link'
import React from 'react'
import classes from './EvntItem.module.css'
import Button from '../ui/Button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRight from '../icons/arrow-right-icon' 
const EventItem = (props) => {
    const{image,title,date,location,id}=props

    const humdate=new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    });
    const address=location.replace(',','\n')
    const explore=`/events/${id}`
  return (
 <li className={classes.item}>
    <img src={'/'+image} alt=''/>
  
        <div className={classes.content}>
        
        <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}> 
            <DateIcon/>
                <time>{humdate}</time>
            </div>
            <div className={classes.address}>
                <AddressIcon/>
                <address>{address}</address>
            </div>
        </div>
        <div className={classes.actions}>
        <Button link={explore}>
            <span>
                Explore Events
            </span>
            <span className={classes.icon}><ArrowRight/></span>
        </Button>
                </div>
        </div>
    
    
 </li>
  )
}

export default EventItem
