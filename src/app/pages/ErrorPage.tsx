import { useNavigate, useRouteError } from "react-router";

export function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100">
      <div className="text-center px-4 max-w-2xl">
        <div className="text-7xl mb-4">⚠️</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ¡Ups! Algo salió mal
        </h1>
        <p className="text-gray-600 mb-6">
          Ha ocurrido un error inesperado en la aplicación.
        </p>
        {error && (
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 mb-8 text-left">
            <p className="text-sm text-gray-700 font-mono">
              {error.statusText || error.message || "Error desconocido"}
            </p>
          </div>
        )}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Volver atrás
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </div>
  );
}
