import { useParams } from "react-router";

export function MatchDetail() {
  const { id } = useParams();
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Detalle del Partido</h1>
      <p>Información del partido #{id}</p>
    </div>
  );
}
