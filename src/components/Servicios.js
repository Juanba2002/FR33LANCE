import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext"
import { Link } from "react-router-dom";

export function Servicios() {

    return (
        <div className="flex-1 flex items-center justify-center">
            <table className="w-full border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-green-500 text-white">
                        <th className="px-4 py-2">Prestador</th>
                        <th className="px-4 py-2">Servicio</th>
                        <th className="px-4 py-2">Descripción general</th>
                        <th className="px-4 py-2">Costo (en pesos colombianos)</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className="border px-4 py-2">Juan Alberto Rodriguez</td>
                        <td className="border px-4 py-2">Plomería</td>
                        <td className="border px-4 py-2">Reparación de fugas de agua y gas</td>
                        <td className="border px-4 py-2">180000</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Luisa Ramirez</td>
                        <td className="border px-4 py-2">Limpieza</td>
                        <td className="border px-4 py-2">Servicio de limpieza profunda para hogares y oficinas</td>
                        <td className="border px-4 py-2">250000</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Carlos Hernandez</td>
                        <td className="border px-4 py-2">Carpintería</td>
                        <td className="border px-4 py-2">Construcción de estructuras de madera para exteriores</td>
                        <td className="border px-4 py-2">280000</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Ana Maria Fernandez</td>
                        <td className="border px-4 py-2">Pintura</td>
                        <td className="border px-4 py-2">Aplicación de pintura decorativa para paredes interiores</td>
                        <td className="border px-4 py-2">150000</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Miguel Rodriguez</td>
                        <td className="border px-4 py-2">Electricidad</td>
                        <td className="border px-4 py-2">Reparación y mantenimiento de sistemas eléctricos de automóviles</td>
                        <td className="border px-4 py-2">200000</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Fernando Alonso</td>
                        <td className="border px-4 py-2">Refacción de muebles</td>
                        <td className="border px-4 py-2">Reparación y restauración de muebles</td>
                        <td className="border px-4 py-2">200000</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Julia Fernández</td>
                        <td className="border px-4 py-2">Electricidad</td>
                        <td className="border px-4 py-2">Instalación de enchufes y switches</td>
                        <td className="border px-4 py-2">250000</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Santiago Gomez</td>
                        <td className="border px-4 py-2">Carpintería</td>
                        <td className="border px-4 py-2">Fabricación de muebles a medida</td>
                        <td className="border px-4 py-2">280000</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Maria Hernandez</td>
                        <td className="border px-4 py-2">Jardinería</td>
                        <td className="border px-4 py-2">Corte y mantenimiento de césped</td>
                        <td className="border px-4 py-2">150000</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Pedro Flores</td>
                        <td className="border px-4 py-2">Pintura</td>
                        <td className="border px-4 py-2">Pintado de interiores y exteriores</td>
                        <td className="border px-4 py-2">200000</td>
                    </tr>
                    {/* Add more rows here */}
                </tbody>
            </table>
        </div>



    )
}