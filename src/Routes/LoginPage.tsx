import { Login } from "@/Api/PersonaApi/PersonaApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";

type user = {
  contrasena: string;
  email: string;
}
export default function LoginPage(){
  const {handleSubmit, register} = useForm<user>();
  
  const onSubmit: SubmitHandler<user> = async (data, e) => {
    e?.preventDefault();
    console.log(data);
    await Login(data.email, data.contrasena).then(response => response.json()).then(cred => {
      document.cookie =  `token=${cred.token}; max-age=${60*3}; path=/; samesite=strict;`;
      console.log(document.cookie);
    });
  };
  
  async function validarCookie() {
    try {
      const jwtCookieName = "token"; // Nombre de la cookie que contiene el token JWT
      const jwtCookie = document.cookie.split('; ').find(row => row.startsWith(`${jwtCookieName}=`));
      console.log(jwtCookie);
      if (!jwtCookie) {
        throw new Error("Cookie JWT no encontrada");
      }
  
      const response = await fetch('https://localhost:7038/api/Facade/ValidarCookie', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtCookie.split('=')[1]}` 
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        return data;
      } else if (response.status === 404) {
        throw new Error("Cookie JWT no encontrada");
      } else if (response.status === 401) {
        throw new Error("Cookie JWT no válida");
      } else {
        throw new Error("Error al validar la cookie JWT");
      }
    } catch (error) {
      console.error("Error al validar la cookie JWT:", error);
      throw error;
    }
  }
  return (
    <main className="w-full h-screen flex justify-center items-center bg-custom-blue">
        <div className="w-2/6 bg-custom-blue-2 p-4 gap-8 rounded-3xl">
        <form onSubmit={handleSubmit(onSubmit)} method="post" className="gap-4 p-10 flex flex-col">
       
            <h1 className="text-white text-center text-3xl mb-6">Iniciar Sesion</h1>
            <p>Iniciar sesion para administrar tu cuenta</p>
            <Input type="email" placeholder="Email" {...register("email", { required: true })} />
            <Input type="password" placeholder="Password" {...register("contrasena", { required: true })} />
            <Button type="button" onClick={()=> validarCookie()}>test</Button>
            <Button type="submit" className="w-full p-6">Iniciar Sesion</Button>
         
          <p>No tienes cuenta? <span>Registrate</span></p>
          <p>Olvidaste la Contraseña</p>
        </form>
        </div>
      </main>
  );
}
