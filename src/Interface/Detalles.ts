export interface DetallesDto {
    nombre: string;
    detalles: string;
    estado: boolean;
    expireTime: string;
  }
  export interface Props {
    open: boolean;
    onClose: () => void;
    detalles: DetallesDto;
    tareaid: number;
  }

  export type CrearTareaDto = {
    ProyectoId: number;
    Detalles: string;
    Estado: boolean;
    ExpireTime: Date;
    PersonaId: number;
    BaseDatos: string;
  };
  export interface CrearTareaDto2 {
    ProyectoId: number;
    Detalles: string;
    Estado: boolean;
    ExpireTime: Date;
    PersonaId: number;
  }