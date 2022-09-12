import React from 'react'
import { useEffect, useState } from 'react';
const AutoQuote = () => {
    const [quotes,setQuotes] = useState([])
    const [randomQuote,setRandomQuotes] = useState('')
    const getQuote = async ()=> {
      const apiFetc = await fetch("https://type.fit/api/quotes")
      const results = await apiFetc.json()
      setQuotes(results)
      let randIndx = Math.floor(Math.random() * results.length)
      setRandomQuotes(results[randIndx])
    }
    useEffect(()=>{
      getQuote() 
    },[])
  const getNewQuote =()=>{
    let randIndx = Math.floor(Math.random() * quotes.length)
    setRandomQuotes(quotes[randIndx])
  }
  return (
    <div className="container">
        <div id="quote-box">
            <p id="text"><i class="fa fa-quote-left" aria-hidden="true"></i> {randomQuote.text}</p>
            <p id="author">- {randomQuote.author}</p>
            <div className="content">
                <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">t</a>
                <button id="new-quote" onClick={getNewQuote}>New Quote</button>
            </div>
        </div>
      </div>
  )
}

export default AutoQuote