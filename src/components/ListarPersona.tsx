import { Personas } from "@/Interface/Persona";

  
  interface Props {
    personas: Personas[];
  }
  
  export function ListarPersona({ personas }: Props) {
    return (
      <>
        {personas.map((persona, index) => (
        <option key={index} value={persona.userId} className="bg-dark-color">
      {persona.nombre}
        </option>
        ))}
      </>
    );
  }