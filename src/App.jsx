import { useState, useEffect } from "react"

function App() {
  const [quoteData, setQuoteData] = useState({})
  const [nextQuote, setNextQuote] = useState(0)

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuoteData({
          quote: data.content,
          author: data.author,
        })
      })
  }, [nextQuote])

  function showNextQuote() {
    setNextQuote((prevQuote) => prevQuote + 1)
  }

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">
          <i className="fa-solid fa-quote-left"></i> {quoteData.quote}
        </p>
        <p id="author">- {quoteData.author}</p>
        <div className="quote-btns">
          <a href="twitter.com/intent/tweet" id="tweet-quote" target="_top">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
          <button onClick={showNextQuote} id="new-quote">
            New Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
