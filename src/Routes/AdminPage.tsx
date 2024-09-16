import { getProyecto } from "@/Api/ProyectoApi/ProyectoApi";
import { Proyecto } from "@/Interface/Proyecto";
import Proyectos from "@/components/Proyecto";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";



export default function AdminPage() {
  const [datosProyecto, setDatosProyecto] = useState<Proyecto[] | null>(null);

  useEffect(() => {
    // Llamar a la API para obtener los datos de los proyectos
    getProyecto().then((data) => {
      if (data == null) return;
      setDatosProyecto(data);
    });
  }, []);

  return (
    <main className="w-full h-dvh">
      <div className="relative outline outline-2 outline-offset-2 w-11/12 mx-auto min-h-[80%] p-4 mt-10 overflow rounded-sm">
        <Button className="absolute top-0 right-0 mt-[-1.5rem] mr-[0.9rem] mx-5">
          Crear Proyecto
        </Button>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Proyectos</h1>
          {datosProyecto && <Proyectos proyectos={datosProyecto} />}
        </div>
      </div>
    </main>
  );
}
