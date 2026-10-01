import React from 'react'
import logo from 
const Headerlinks = [
    { id: 1, 
        title: 'Inicio', 
        link: '#inicio'
     },
    { id: 2, 
        title: 'Acerca de', 
        link: '#acerca'
     },

    { id: 3, 
        title: 'Contacto', 
        link: '#contacto'
     },
    
] 

const Header = () => {
  return (
    <nav>
        <div>
            <div>
                <img src="logo.png" alt="Logo"/>
            </div>
            <div>
                <ul>
                  {Headerlinks.map((link) => (
                    <li key={link.id}>
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
            </div>

             <div>
                <ul>
                    <div>
                        <a href="#">Iniciar sesion </a>
                        <a href="#">Registrarse</a>
                    </div>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header