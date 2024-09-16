export async function getProyecto(){
    const response = await fetch(import.meta.env.VITE_REACT_Domain + "/api/Facade/Proyectos")
    .then((response) => response.json())
    .catch((error) =>
      console.error("Error al obtener los datos de los proyectos:", error)
    );
    return response;
} 