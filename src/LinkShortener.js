import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from './Link'

function LinkShortener() {
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState(false)
  const [submitValue, setSubmitValue] = useState('')
  const [links, setLinks] = useState(JSON.parse(localStorage.getItem('links')) || '')

  useEffect(() => {
    if (submitValue) {
      axios.get(`https://api.shrtco.de/v2/shorten?url=${submitValue}`)
        .then(res => {
          const urls = [...links, [inputValue, res.data.result.short_link]]
          setLinks(urls)
          setInputValue('')
        })
    }
  }, [submitValue])

  useEffect(() => {
    if (submitValue) {
      localStorage.setItem('links', JSON.stringify(links))
    }
  }, [links])

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!inputValue) {
      setInputError(true)
    } else {
      setInputError(false)
      setSubmitValue(inputValue)
    }
  }

  return (
    <section className='shorten'>
      <div className="shorten__inner container">
        <div className='shorten__form-wrapper'>
          <form className='shorten__form' onSubmit={handleSubmit}>
            <div className='shorten__form-input-wrapper'>
              <input className={inputError ? 'shorten__form-input shorten__form-input--error' : 'shorten__form-input'} type="text" placeholder='Shorten a link here...' value={inputValue} onChange={handleChange} />
              {inputError ? <span className='shorten__form-error-msg'>Please add a link</span> : ''}
            </div>
            <button className='shorten__form-btn btn'>Shorten It!</button>
          </form>
        </div>
        <div className='shorten__links'>
          {links ? links.map(link => {
            return <Link link={link} />
          }) : ''}
        </div>
      </div>
    </section>
  )
}

export default LinkShortener