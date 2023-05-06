import classes from './Navbar.module.css'

const Navbar = () => {
  return <nav className={classes.navbar}>
    <a href="/" className={classes.name}>Форма бронирования переговорной</a>
  </nav>
}

export default Navbar;