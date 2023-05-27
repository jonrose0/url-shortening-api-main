function Nav({toggle}) {
  return (
    <nav className={toggle ? 'nav nav--active' : 'nav'}>
      <ul className="nav__list">
        <li><a className="nav__link" href="/">Features</a></li>
        <li><a className="nav__link" href="/">Pricing</a></li>
        <li><a className="nav__link" href="/">Resources</a></li>
      </ul>
      <ul className="nav__list-right">
        <li><a className="nav__link" href="/">Login</a></li>
        <li><a className="nav__link btn btn--signup" href="/">Sign Up</a></li>
      </ul>
    </nav>
  )
}

export default Nav