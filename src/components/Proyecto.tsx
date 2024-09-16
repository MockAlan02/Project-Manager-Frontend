import { Proyecto } from "@/Interface/Proyecto";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Props {
    proyectos: Proyecto[];
  }

export default function Proyectos({ proyectos }: Props) {
    return (
      <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-10 mx-auto">
        {proyectos.map((proyecto) => (
          <Link to={`${proyecto.id}`} key={proyecto.id}>
            <Card className="w-[350px] cursor-pointer flex-nowrap">
              <CardHeader>
                <CardTitle>{proyecto.nombre}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{proyecto.descripcion}</p>
                <p>{proyecto.startTime}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    );
  }