
import { getPersonas } from "@/Api/PersonaApi/PersonaApi";
import { crearTareaDt } from "@/Api/TareaApi/TareaApi";
import { CrearTareaDto } from "@/Interface/Detalles";
import { Personas } from "@/Interface/Persona";
import { ListarPersona} from "@/components/ListarPersona";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


type CrearTareaProps = {
  open: boolean;
  onClose: () => void;
  ProyectoId: number;
};

export default function CrearTarea({
  open,
  onClose,
  ProyectoId,
}: CrearTareaProps) {
  
  const [date, setDate] = React.useState<Date>();
  const [persona, SetPersona] = useState<Personas[] | null>(null);

  useEffect(() => {
    getPersonas()
      .then((personas) => {
        SetPersona(personas);
      })
      .catch((error) => {
        console.error("Error al obtener y establecer las personas:", error);
      });
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CrearTareaDto>();

  const onSubmit: SubmitHandler<CrearTareaDto> = async (data, e) => {
    e?.preventDefault();
    data = {
      ...data,
      ExpireTime: new Date(date?.toISOString() as string),
      ProyectoId: ProyectoId,
    };
    data.Estado = Boolean(data.Estado);

    const response = await crearTareaDt(data);
    try {
      if (response == null || response.status == 400) {
        return;
      }
      onClose();
    } catch (error) {
      console.error("Error al crear la tarea:", error);
      throw error;
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div className="w-full h-dvh">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-5/12 mx-auto mt-40 flex flex-col gap-8"
      >
        <div>
          <label>Detalles</label>
          <Input
            className="mt-2"
            type="text"
            {...register("Detalles", { required: true })}
          />
          {errors.Detalles && <span>This field is required</span>}
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="no" className="mb-4">
            Escoge un estado:
          </label>
          <select
            id="no"
            className="bg-transparent rounded-xl border-blue-900"
            {...register("Estado", { required: true })}
          >
            <option value="" className="bg-dark-color">
              Selecciona Estado
            </option>
            <option value="true" className="bg-dark-color">
              Activo
            </option>
            <option value="false" className="bg-dark-color">
              Inactivo
            </option>
          </select>
        </div>

        <div className="flex flex-col w-full">
          <label>Tiempo de expiracion</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal mt-4",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => {
                  setDate(newDate);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
                
        <div>
          <div className="flex flex-col w-full">
            <label htmlFor="Persona" className="mb-4">
              Selecciona una persona:
            </label>
            <select
              id="cars"
              className="bg-transparent rounded-xl border-blue-900"
              {...register("PersonaId", { required: true })}
            >
              <option value="" className="bg-dark-color">
                Selecciona la persona
              </option>
              {persona && <ListarPersona personas={persona} />}
            </select>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="no" className="mb-4">
            Escoge una Base de datos:
          </label>
          <select
            id="no"
            className="bg-transparent rounded-xl border-blue-900"
            {...register("BaseDatos", { required: true })}
          >
            <option value="" className="bg-dark-color">
              Selecciona Estado
              
            </option>
            <option value="sqlServer" className="bg-dark-color">
            sqlServer
            </option>
            <option value="PostGressql" className="bg-dark-color">
              Postgres
            </option>
            <option value="SqlLite" className="bg-dark-color">
              SqlLite
            </option>
          </select>
        </div>
        <div className="flex w-full justify-end gap-x-6">
          <Button type="button" className="w-[120px]" onClick={onClose}>
            Cerrar
          </Button>
          <Button type="submit" className="w-[120px]">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
