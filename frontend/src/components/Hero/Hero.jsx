import React from 'react'
import './Hero.css'

// TODO: datos de muestra (placeholder)
const reportes = [
  { id: 1, titulo: 'Baño bloqueado', estado: 'Resuelto', tipo: 'resuelto' },
  { id: 2, titulo: 'Foco quemado', estado: 'En proceso', tipo: 'proceso' },
  { id: 3,  titulo: 'PC dañada', estado: 'Pendiente', tipo: 'pendiente' },
]

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero__texto">
        <h1 className="hero__titulo">
          Tu voz mejora tu <span>colegio</span>
        </h1>

        <p className="hero__descripcion">
          Reporta daños en la infraestructura de tu institución educativa.
          Juntos construimos entornos de aprendizaje más seguros y dignos.
        </p>

        <div className="hero__botones">
          <a href="/reportar" className="btn btn-terracota">Reportar ahora</a>
          <a href="#acerca" className="btn btn-claro">Saber más</a>
        </div>
      </div>

      <div className="hero__visual">
        {reportes.map((r) => (
          <div key={r.id} className={`tarjeta tarjeta--${r.id}`}>
            <span className="tarjeta__icono">{r.icono}</span>
            <div>
              <strong>{r.titulo}</strong>
              <span className={`estado estado--${r.tipo}`}>{r.estado}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero