import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext"
import { Link } from "react-router-dom";

export function Home() {

    const { user, logout, loading } = useAuth();
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate("/login")
    }

    if (loading) return <h1> LOADING </h1>

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white-200 bg-opacity-10 bg-cover bg-center bg-no-repeat">

            <button className="absolute top-4 right-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all" onClick={handleLogout}>
                Logout
            </button>

            <Link to="/servicios" className="absolute top-4 left-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all">
                Servicios
            </Link>


            <div className="w-full min-h-screen flex flex-col justify-center items-center bg-white-200 bg-opacity-60 bg-cover bg-center bg-no-repeat">
                <nav className="flex justify-between items-center px-4 py-2 bg-green-500">
                    <h1 className="text-xl font-bold text-white">Welcome {user.email}</h1>
                    <button className="absolute top-4 right-4 px-4 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all" onClick={handleLogout}>
                        Logout
                    </button>
                </nav>
            </div>
        </div>
    );
}

