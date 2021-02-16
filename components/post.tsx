import React, { useState } from 'react'
import Link from "next/link";
import getStripe from '../utils/get-stripejs'
import { fetchPostJSON } from '../utils/api-helpers'


const Post= ({ alt, date, image, url }) =>{
  const [loading, setLoading] = useState(false)

  const handleSubmit=async(e) =>{
    e.preventDefault()
    setLoading(true)
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/checkout_sessions', {
      amount: 15,
    })

    if (response.statusCode === 500) {
      console.error(response.message)
      return
    }

    // Redirect to Checkout.
    const stripe = await getStripe()
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message)
    setLoading(false)

  }

 
  
    return ( 
      <div className="card">
      <form onSubmit={handleSubmit}>

      
      <img className="responsive" src={url[0].fields.file.url}/>
      <div className="heading">{alt}</div>
    
      <button className="button instagram" type="submit"
        disabled={loading}
      >Buy Now</button>
      
    
      </form>
      </div>

     
      
    

     
    )
  }
  
  export default Post

