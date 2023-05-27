import { useState } from "react"

function Link({ link }) {
  const [isCopied, setIsCopied] = useState(false)

  function handleCopy(e) {
    navigator.clipboard.writeText(e.target.previousSibling.value)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }
  
  return (
    <div className='shorten__link-wrapper'>
      <div className='shorten__links-inner'>
        <p className='shorten__original'>{link[0]}</p>
      </div>
      <div className='shorten__links-inner shorten__links-inner--bottom'>
        <input className='shorten__link' value={link[1]} readOnly></input>
        <button className={isCopied ? 'btn--shorten btn--violet btn' : 'btn--shorten btn'} onClick={handleCopy}>{isCopied ? 'Copied' : 'Copy'}</button>
      </div>
    </div>
  )
}

export default Link