
import { Tareas } from "@/components/Tareas";
import { useEffect, useState } from "react";

export default function TaskList() {
const [task, setTask] = useState<Tareas[] | null>(null);
useEffect(() => {
    fetch("https://localhost:7038/api/Facade/TraerUserId?id=1").then((response) => response.json()).then((data) => {
        setTask(data);
    }).catch((error) => {
            console.error("Error al obtener los datos de los proyectos:", error);
            throw error;
            });
}, []);
return (
  
          <main className="w-full max-h-[100%] mb-3">
      <div className="relative outline outline-2 outline-offset-2 w-11/12 mx-auto min-h-[90%] p-4 mt-10 overflow rounded-sm">
        <div >

     {task && <Tareas tareas={task} handleClick={()=> console.log("nothing")}/>}
   
        </div>
    </div>
    </main>
);
}
