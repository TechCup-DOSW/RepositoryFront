import { useParams } from "react-router";

export function TournamentDetail() {
  const { id } = useParams();
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Detalle del Torneo</h1>
      <p>Información del torneo #{id}</p>
    </div>
  );
}
