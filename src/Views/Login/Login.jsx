import React from 'react'
import BG from '../../Assets/background-login.jpg'
import './Login.css'

const Login = () => {
  return (
    <div>
    <div className='background'><img src={BG} alt="" /></div>
    <div className='login-container'>

        <section className='login-form--container'>
            <h2>Iniciar sesion</h2>

            <div className='login-form'>
                <form>
                    <input type="text" placeholder='Email o numero de telefono'/>
                    <input type="password" placeholder='Contraseña'/>
                    <button>Iniciar sesion</button>
                </form>
                <div className='login-form-remember-and-helper'>
                    <div className='login-remember-me-label-text'>
                        <input type="checkbox" name="rememberMe" id="rememberMe" />
                        <p>Recuerdame</p>
                    </div>
                    <div className='helper'>
                        <p>¿Necesitas ayuda?</p>
                    </div>
                </div>
            </div>

            <div className='login-signup-now'>
                <h6>¿Primera vez? <span>Suscribete ahora</span></h6>
                <p>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <span>Más info.</span></p>
            </div>
        </section>


        <footer>
            <h6>¿Preguntas? Llama al 0800 345 1593</h6>

            <div className='footer-container'>
                <ul>
                    <li>Preguntas frecuentes</li>
                    <li>Terminos de uso</li>
                    <li>Preferencias de cookies</li>
                </ul>
                <ul>
                    <li>Centro de ayuda</li>
                    <li>Privacidad</li>
                    <li>Informacion corporativa</li>
                </ul>
            </div>
        </footer>
    </div>
    </div>
  )
}

export default Login