import './App.css';
import React, {useState} from 'react';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${quote.content} - ${quote.author}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=&quote=${quote.content} - ${quote.author}`;

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="social-share">
          <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="btn">Share on WhatsApp</a>
          <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="btn">Share on Twitter</a>
          <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="btn">Share on Facebook</a>
        </div>
      </div>
    </>
  )
}

export default App;
