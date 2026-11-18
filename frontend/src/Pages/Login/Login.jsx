import { Link } from 'react-router-dom'
import './Login.css'
import iconoCasa from '../../assets/icono-casa.svg'

const Login = () => {
  const enviar = (e) => {
    e.preventDefault()  // evita que la página se recargue; el envío real va en el paso 6
  }

  return (
    <main className="login">
      <img src={iconoCasa} alt="" className="login__icono" />

      <h1 className="login__titulo">Inicia sesión</h1>
      <p className="login__subtitulo">
        Accede para crear o dar seguimiento a tus reportes
      </p>

      <form className="login__card" onSubmit={enviar}>
        <div className="campo">
          <label className="campo__label" htmlFor="correo">Correo institucional</label>
          <input id="correo" type="email" className="campo__input" placeholder="tu@colegio.edu.co" />
        </div>

        <div className="campo">
          <label className="campo__label" htmlFor="password">Contraseña</label>
          <input id="password" type="password" className="campo__input" placeholder="••••••••" />
        </div>

        {/* TODO: el Figma no tiene la pantalla de recuperar contraseña */}
        <a href="#" className="login__olvido" onClick={(e) => e.preventDefault()}>
          ¿Olvidaste tu contraseña?
        </a>

        <button type="submit" className="boton-principal">Iniciar sesión</button>

        <div className="divisor">o</div>

        <p className="login__pie">
          ¿No tienes cuenta? <Link to="/registro">Regístrate gratis</Link>
        </p>
      </form>
    </main>
  )
}

export default Login