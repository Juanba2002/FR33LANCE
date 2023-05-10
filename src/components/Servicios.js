import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

export function Servicios() {
  const [showDetails, setShowDetails] = useState(false); // variable de estado para controlar si se muestra la información detallada o no
  const [selectedService, setSelectedService] = useState(null); // variable de estado para almacenar el servicio seleccionado

  const services = [
    {
      id: 1,
      provider: "Juan Alberto Rodriguez",
      name: "Plomería",
      description: "Reparación de fugas de agua y gas",
      price: 180000,
    },
    {
      id: 2,
      provider: "Luisa Ramirez",
      name: "Limpieza",
      description: "Servicio de limpieza profunda para hogares y oficinas",
      price: 250000,
    },
    {
        id: 3,
        provider: "Carlos Hernandez",
        name: "Carpintería",
        description:
          "Construcción de estructuras de madera para exteriores",
        price: 280000,
      },
      {
        id: 4,
        provider: "Ana Maria Fernandez",
        name: "Pintura",
        description:
          "Aplicación de pintura decorativa para paredes interiores",
        price: 150000,
      },
  ];

  function handleServiceClick(service) {
    setSelectedService(service);
    setShowDetails(true);
  }

  function handleCloseDetails() {
    setSelectedService(null);
    setShowDetails(false);
  }

  return (
    <div className="flex-1 flex flex-wrap items-center justify-center">
      {services.map((service) => (
        <div
          key={service.id}
          className="m-2 p-2 w-72 h-56 bg-white shadow-md rounded-lg flex flex-col items-center justify-center"
        >
          <h2 className="text-xl font-bold">{service.name}</h2>
          <button
            className="mt-4 mb-2 px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none"
            onClick={() => handleServiceClick(service)}
          >
            Ver detalles
          </button>
          <button
  className="mt-2 px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-green-600 focus:outline-none"
  onClick={() => alert("Servicio contratado")}
>
  Contratar servicio
</button>

        </div>
      ))}

      {showDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <button
              className="absolute top-2 right-2 px-2 py-1 rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none"
              onClick={handleCloseDetails}
            >
              X
            </button>
            <h2 className="text-xl font-bold mb-2">{selectedService.name}</h2>
            <p className="mb-2">
              <strong>Prestador:</strong> {selectedService.provider}
            </p>
            <p className="mb-2">
              <strong>Descripción:</strong> {selectedService.description}
            </p>
            <p className="mb-2">
              <strong>Costo:</strong> ${selectedService.price.toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
