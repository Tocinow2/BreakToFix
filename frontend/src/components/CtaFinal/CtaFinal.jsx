import React from 'react'
import { Link } from 'react-router-dom'
import './CtaFinal.css'

const CtaFinal = () => {
  return (
    <section className="cta">
      <h2 className="cta__titulo">¿Listo para hacer el cambio?</h2>
      <p className="cta__texto">Conecta problemas con soluciones.</p>
      <Link to="/registro" className="cta__boton">Crear cuenta gratis </Link>
    </section>
  )
}

export default CtaFinal