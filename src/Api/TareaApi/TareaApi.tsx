import { CrearTareaDto2 } from "@/Interface/Detalles";



export async function getTarea(id : number){
  const response = await fetch(import.meta.env.VITE_REACT_Domain +`/api/Facade/ProyectoId?id=${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
  return response;
}
//EndPoint Api para Eliminar Tareas
export async function deleteTarea(itemId: number) {
  try {
    const response = await fetch(
      import.meta.env.VITE_REACT_Domain + `/api/Facade/BorrarTarea?id=${itemId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Error al eliminar el item");
    }
    
    return response; // Mueve este return dentro del bloque try
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
//EndPoint Api para Crear Tareas
export async function crearTareaDt(data: CrearTareaDto2) {
  const response = await fetch(import.meta.env.VITE_REACT_Domain +"/api/Facade/Crear", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
  return response;
}
//EndPoint Api para Obtener Detalles tarea a traves de su id
export async function tareaSeleccionado(id: number) {
  const response = await fetch(
    import.meta.env.VITE_REACT_Domain + `/api/Facade/Detalles?id=${id}`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return response;
}
