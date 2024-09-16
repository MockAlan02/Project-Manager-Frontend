import { Card, CardContent, CardHeader } from "@/components/ui/card";

export interface Tareas {
    id: number;
    proyectoId: number;
    detalles: string;
    estado: boolean;
    expireTime: string;
  }
  export interface Props {
    tareas: Tareas[];
    handleClick: (index: number) => void;
  }
  
  export function Tareas({ tareas, handleClick }: Props) {
      return (
        <div className="grid gap-3  mt-10 mx-auto w-[100%] sm:grid-cols-2 grid-rows-2 md:grid-cols-3 grid-rows-3 2xl:grid-cols-4 grid-rows-3">
          {tareas?.map((tarea) => (
            <div key={tarea.id} onClick={()=> handleClick(tarea.id)}>
              <Card className="w-min-[200px] w-max-[350px] cursor-pointer  border-gray-300">
                <CardHeader></CardHeader>
                <CardContent className="flex flex-col w-full justify-center item">
                  <p>{tarea.detalles}</p>
                  <p>{new Date(tarea.expireTime).toLocaleDateString("Es-es")}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      );
    }