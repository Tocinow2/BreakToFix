import React from 'react'
import './Footer.css'
import logo from '../../assets/Logo_BreakToFix_azul.png'

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__marca">
        <img src={logo} alt="Logo del sitio" className="footer__img" />
        <span className="footer__nombre"><b>Break</b>ToFix</span>
        <span className="footer__lema">— Mejorando la educación juntos</span>
      </div>

      <nav className="footer__links">
        <a href="#acerca">Acerca de</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <span className="footer__copy">© 2026 BreakToFix</span>
    </footer>
  )
}

export default Footer