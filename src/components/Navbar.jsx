import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>Limon bar</h1></Link>
        <ul className='menu'>
            <li><Link className='menu-link' to='/'>Inicio</Link></li>
            <li><Link className='menu-link' to='/productos'>Productos</Link></li>
            <li><Link className='menu-link' to='/productos/tragos'>Tragos</Link></li>
            <li><Link className='menu-link' to='/productos/vinos'>Vinos</Link></li>
            <li><Link className='menu-link' to='/productos/bebidas'>Bebidas</Link></li>
            <li><Link className='menu-link' to='/nosotros'>Nosotros</Link></li>
            <li><Link className='menu-link' to='/contacto'>Contacto</Link></li>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default Navbar