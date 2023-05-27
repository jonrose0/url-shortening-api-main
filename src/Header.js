import { useState } from 'react'
import logo from './images/logo.svg'
import Nav from './Nav'

function Header() {
  const [navToggle, setNavToggle] = useState(false)

  function handleClick() {
    console.log('working')
    setNavToggle(!navToggle)
  }

  return (
    <header className='header'>
      <div className="header__inner container">
        <img src={logo} alt="" />
        <Nav toggle={navToggle} />
        <button className='nav-toggle' onClick={handleClick}>
          <span className='nav-toggle__line'></span>
        </button>
      </div>
    </header>
  )
}

export default Header