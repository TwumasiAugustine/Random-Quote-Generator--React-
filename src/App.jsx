import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import React from 'react'
import { useState, useEffect } from 'react'
import QuoteData from './QuoteData.json'
import './App.css'

function App () {
  const [quotes, setQuotes] = useState('')
  const [authors, setAuthors] = useState('')

  const getQuotes = () => {
    const quotesArray = QuoteData.data.quotes
    const randomQuotes = Math.floor(Math.random() * quotesArray.length)

    setQuotes(quotesArray[randomQuotes].quote)
    setAuthors(quotesArray[randomQuotes].author)
  }

  useEffect(
		() => {
  getQuotes()
},
		[setQuotes, setAuthors]
	)
  // Share Quotes on click
  const tweetShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quotes} - ${authors}`,
      'twitter-share',
      'width=550,height=235'
    )
  }
  return (
    <div className='container' id='wrapper'>
      <div
        id='quote-box'
        className='card shadow p-3 mb-5 bg-white rounded'
			>
        <div className='card-header'>
          <h1 className='card-title'>Random Quote Generator</h1>
        </div>
        <div className='card-body'>
          <div className='quote-text justify-content-center align-content-center'>
            <i className='bi bi-quote h1 me-2' />
            <span id='text' className='card-text p-2'>
              {quotes}
            </span>
            <div className='quote-author m-2 text-secondary'>
              <span id='author'>
								- {authors}
              </span>
            </div>
            <div className='d-flex  justify-content-between  mt-2 p-2'>
              <a
                href=''
                type='button'
                className='btn btn-primary'
                id='tweet-quote'
                rel='noreferrer'
                target='_blank'
                onClick={tweetShare}
							>
                <i className='bi bi-twitter me-2' />
								Tweet Quote
							</a>
              <a
                href='#'
                type='button'
                className='btn btn-success'
                id='new-quote'
                onClick={getQuotes}
							>
								New Quote
							</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
