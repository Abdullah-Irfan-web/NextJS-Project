import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const refval=useRef();
  function registrationHandler(event) {
    event.preventDefault();

    fetch('/api/NewsLetter',{
      method:'POST',
      body:JSON.stringify({email:refval.current.value}),
      headers:{
        'Content-type':'application/json'
      }
    })
    .then(data=>{
      return data.json()
    })
    .then(val=>{
      console.log(val);
    })
  }
  
  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={refval}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
