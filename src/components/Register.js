import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function Register() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();


  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signup(user.email, user.password);
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (


    <div className="w-full max-w-xs m-auto">

      <h1 className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text tracking-tight mb-10 font-heading">FREELANCE</h1>


      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit} className="bg-white 
      shadow-md rounder px-8 pt-6 pb-8 mb-4">

        <div className="mb-4">
          <label htmlFor="email" className="block 
          text-gray-777 text-sm font-bold mb-2">Nuevo Email</label>
          <input
            type="email"
            name="email"
            placeholder="youremail@site.com"
            className="shadow appearence- none border rounder 
             w-fully py-2 px-3 text-gray-777 leading-tight 
             focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block 
          text-gray-777 text-sm font-bold mb-2">Nueva Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="* * * * * * *"
            className="shadow appearence- none border rounder 
             w-fully py-2 px-3 text-gray-777 leading-tight 
             focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <p className="my-4 text-sm flex justify-between px-3">
          Ya tienes una cuenta? <Link to='/login' className="font-bold"> Login
          </Link>
        </p>


        <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded ">
          Register
        </button>

      </form>

    </div>

  )
}

