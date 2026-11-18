import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/Logo_BreakToFix_azul.png'

const Headerlinks = [
  { id: 1, title: 'Inicio', link: '/#inicio' },
  { id: 2, title: 'Acerca de', link: '/#acerca' },
  { id: 3, title: 'Contacto', link: '/#contacto' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const enInicio = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`header ${scrolled || !enInicio ? 'header--scrolled' : ''}`}>
      <Link to="/" className="header__logo">
        <img src={logo} alt="Logo del sitio" className="header-logo" />
        <span><b>Break</b>ToFix</span>
      </Link>
      
      <div className="header__nav">
        <ul className="menu">
          {Headerlinks.map((link) => (
            <li key={link.id}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="acciones">
          <Link to="/login" className="header__login">Iniciar sesión</Link>
          <Link to="/registro" className="header__registro">Registrarse</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header