import React from 'react'
import './ComoFunciona.css'

const pasos = [
  { id: 1, numero: '01', titulo: 'Regístrate', texto: 'Crea tu cuenta con tu correo institucional en menos de 2 minutos.' },
  { id: 2, numero: '02', titulo: 'Reporta', texto: 'Describe el daño, sube una foto y asigna prioridad al problema.' },
  { id: 3, numero: '03', titulo: 'Seguimiento', texto: 'Monitorea en tiempo real el estado de cada reporte.' },
  { id: 4, numero: '04', titulo: 'Solución', texto: 'El colegio recibe la alerta y coordina la reparación.' },
]

const ComoFunciona = () => {
  return (
    <section className="how" id="acerca">
      <div className="how__encabezado">
        <span className="how__etiqueta">¿Cómo funciona?</span>
        <h2 className="how__titulo">Simple, rápido y efectivo</h2>
        <p className="how__subtitulo">
          En cuatro pasos transformamos un problema en una solución real para tu institución.
        </p>
      </div>

      <div className="how__pasos">
        {pasos.map((p) => (
          <div key={p.id} className="how__tarjeta">
            <span className="how__numero">{p.numero}</span>
            <h3>{p.titulo}</h3>
            <p>{p.texto}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ComoFunciona