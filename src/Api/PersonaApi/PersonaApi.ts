import { Personas } from "@/Interface/Persona";

  export async function getPersonas(): Promise<Personas[]> {
    try {
      const response = await fetch(import.meta.env.VITE_REACT_Domain + "/api/Facade");
      const data = await response.json();
      return data as Personas[];
    } catch (error) {
      console.error("Error al obtener los datos de los proyectos:", error);
      throw error; // Importante lanzar el error para que el llamador pueda manejarlo.
    }
  }

  export async function Login(correo: string, contrasena: string) {
    try {
      const response = await fetch(import.meta.env.VITE_REACT_Domain + `/api/Facade/IniciarSesion?correo=${correo}&contrasena=${contrasena}`);
     return response;
     
    } catch (error) {
      console.error("Error al obtener los datos de los proyectos:", error);
      throw error; // Importante lanzar el error para que el llamador pueda manejarlo.
    }
  }
