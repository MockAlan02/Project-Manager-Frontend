import { Button } from "@/components/ui/button";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CrearTarea from "./Form/CrearTarea";
import { Tareas } from "@/components/Tareas";
import { DetallesDto } from "@/Interface/Detalles";
import Detalles from "@/components/Detalles";
import { getTarea, tareaSeleccionado } from "@/Api/TareaApi/TareaApi";

export default function Tarea() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [tareas, setTarea] = useState<Tareas[] | null>(null);

  const { id } = useParams();
  const num = parseInt(id as string);
  const [tareaSeleccionada, setTareaSeleccionada] = useState<number | null>(
    null
  );
  const [detalles, setDetalles] = useState<DetallesDto | null>(null);
  
  //Usar el hook useEffect para obtener las tareas id
  const handleClick = (index: number) => {
    if (index == null) {
      return;
    }
    setTareaSeleccionada(index);
  };
  //Usar el hook useEffect para obtener las tareas
  useEffect(() => {
    getTarea(num).then((data) => {
      if (data == null) return;
      setTarea(data);
    });
  }, [tareaSeleccionada]);


  useEffect(() => {
    if (tareaSeleccionada == null) return;
    tareaSeleccionado(tareaSeleccionada).then((data) => {
      if (data == null) return;
      setDetalles(data);
      setOpen2(true);
    });
   
  }, [tareaSeleccionada]);

  const handleDetallesClose = () => {
    
    setTareaSeleccionada(null);
    setTarea(null)
    setDetalles(null); // Reinicia los detalles
    setOpen2(false);
  };
  

  const handleDetallesClose2 = () => {
    setOpen(false);
    setDetalles(null);
  };

  return (
    <main className="w-full max-h-[100%]">
      <div className="relative outline outline-2 outline-offset-2 w-11/12 mx-auto min-h-[90%] p-4 mt-10 overflow rounded-sm">
        <Button
          className="absolute top-0 right-0 mt-[-1.5rem] mr-[0.9rem] mx-5"
          onClick={() => setOpen(!open)}
        >
          Crear Tarea
        </Button>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Tarea</h1>
          {tareas && <Tareas tareas={tareas} handleClick={handleClick} />}

          {open2 && detalles && (
            <div className="fixed inset-0 bg-black/90  z-10">
              <Detalles
                detalles={detalles}
                open={open2}
                onClose={handleDetallesClose}
                tareaid={tareaSeleccionada as number}
              />
            </div>
          )}
        </div>
        {open && (
          <div className="fixed inset-0 bg-black/90  z-10">
            {" "}
            <CrearTarea
              open={open}
              onClose={handleDetallesClose2}
              ProyectoId={num}
            />
          </div>
        )}
      </div>
    </main>
  );
}
