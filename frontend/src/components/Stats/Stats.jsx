import React from 'react'
import './Stats.css'

// TODO: datos de muestra (placeholder). Reemplazar por datos reales de la API.
const estadisticas = [
  { id: 1, numero: '1,240+', texto: 'Reportes enviados' },
  { id: 2, numero: '87%', texto: 'Resueltos' },
  { id: 3, numero: '320', texto: 'Colegios activos' },
  { id: 4, numero: '12K', texto: 'Estudiantes' },
]

const Stats = () => {
  return (
    <section className="stats">
      {estadisticas.map((e) => (
        <div key={e.id} className="stats__item">
          <strong className="stats__numero">{e.numero}</strong>
          <span className="stats__texto">{e.texto}</span>
        </div>
      ))}
    </section>
  )
}

export default Stats