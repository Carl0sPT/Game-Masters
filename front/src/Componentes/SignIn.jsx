import {NavLink } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState,useContext } from "react";
import { Contexto } from "../Context/Contexto";
import { useNavigate} from "react-router-dom";
import Modal from 'react-modal'
import { useSpring, animated } from 'react-spring';
import { Footer } from "./Footer/Footer";
export const SignIn=()=>{
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleShowPassword = () => setShowPassword(!showPassword);


  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  let {loginUser,user}=useContext(Contexto)
  // let navigate=useNavigate()
// const [modalIsOpen, setModalIsOpen] = useState(false)
// console.log(user)
Modal.setAppElement('#root');

  return (
    <>

    <Navbar/>

    <div className="min-h-screen bg-gray-200 flex items-center justify-center bg-fondo">
      <animated.div style={fadeIn} className="w-full max-w-md">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form onSubmit={loginUser} className="mb-3 mt-4">
            <h2 className="font-bold mb-2 text-uppercase text-center">
              Bienvenido a GamesMasters
            </h2>
            <p className="mb-5 text-center">
             Introduce tu nombre de usuario y contraseña
            </p>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="username"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
      <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="password"
          placeholder="*******"
        />
        <button
          type="button"
          className="absolute right-0 top-0 mr-2 mt-3 focus:outline-none"
          onClick={toggleShowPassword}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4c-2.76 0-5 2.24-5 5v2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2h-1V9c0-2.76-2.24-5-5-5z"
            />
          </svg>
        </button>
      </div>
    </div>
            <div className="flex items-center justify-between">
              <animated.button
                style={fadeIn}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                type="submit"
              >
                Login
              </animated.button>
              <div>
                <p className="mb-5 text-center">
                  ¿No tienes una cuenta aún?{' '}
                  <NavLink to="/registrar" className="text-blue-500 font-bold">
                    {' '}
                    Registrarse
                  </NavLink>
                </p>
                <p className="mb-5 text-center">
                  ¿Has olvidado tu contraseña?{' '}
                  <NavLink to="/resetPassword" className="text-blue-500 font-bold">
                    {' '}
                    Recuperar contraseña
                  </NavLink>
                </p>
              </div>
              
                
             
            </div>
          </form>
        </div>
      </animated.div>
    </div>
    <Footer/>
    </>
  );
}

