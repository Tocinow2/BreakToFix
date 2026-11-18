import React from 'react'
import './Categorias.css'

// TODO: los conteos son datos de muestra (placeholder). Reemplazar por datos reales de la API.
const categorias = [
  { id: 1, icono: '🚽', nombre: 'Baños', reportes: 312 },
  { id: 2, icono: '💡', nombre: 'Eléctrico', reportes: 201 },
  { id: 3, icono: '🖥️', nombre: 'Tecnología', reportes: 178 },
  { id: 4, icono: '🪑', nombre: 'Mobiliario', reportes: 156 },
  { id: 5, icono: '🚪', nombre: 'Infraestructura', reportes: 134 },
  { id: 6, icono: '🌿', nombre: 'Áreas verdes', reportes: 89 },
]

const Categorias = () => {
  return (
    <section className="cats" id="categorias">
        <div className="cats__encabezado">
        <h2 className="cats__titulo">¿Qué tipo de problemas puedes reportar?</h2>
      </div>

      <div className="cats__grid">
        {categorias.map((c) => (
          <a key={c.id} href="/reportar" className="cats__tarjeta">
            <span className="cats__icono">{c.icono}</span>
            <strong>{c.nombre}</strong>
            <span className="cats__conteo">{c.reportes} reportes</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Categorias