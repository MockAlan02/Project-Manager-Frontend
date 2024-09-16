import { Props } from "@/Interface/Detalles";
import { Button } from "./ui/button";
import { deleteTarea } from "@/Api/TareaApi/TareaApi";

export default function Detalles({ open, onClose, detalles, tareaid }: Props) {
    if (!open) {
      return null;
    }
   
    return (
      <div className=" w-full h-[80%] flex justify-center items-center flex-col">
        <div className="w-3/12 bg-blue-950 h-auto p-6 rounded-xl">
          <h1 className="text-3xl mb-8 font-bold">Detalles Cliente</h1>
          <p>
            {" "}
            <span className="font-medium mr-2">Nombre:</span> {detalles.nombre}
          </p>
          <p>
            {" "}
            <span className="font-medium mr-2">Detalles:</span>{" "}
            {detalles.detalles}
          </p>
          <p>
            {" "}
            <span className="font-medium mr-2">Fecha Vencimiento</span>:{" "}
            {new Date(detalles.expireTime).toLocaleDateString()}
          </p>
          <p>
            {" "}
            <span className="font-medium mr-2">Estado:</span>{" "}
            {detalles.estado ? "Activo" : "Inactivo"}
          </p>
          <div className="w-full flex justify-end  gap-x-3 mt-4">
            <Button type="button" className="w-[120px] " onClick={onClose}>
              {" "}
              Cerrar
            </Button>
            <Button
              variant="destructive"
              className="w-[120px]"
              onClick={async() => {
                try{
  
                 const response = await deleteTarea(tareaid)
                  if(response){
                    console.log("Tarea Eliminada")
                  onClose()
                }
                }catch(Error) {
                  console.log(Error)
                }
              }}
            >
              Borrar
            </Button>
          </div>
        </div>
      </div>
    );
  }
  