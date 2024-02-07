'use server'

import { Resend } from "resend";

interface FormInputs{
    name:string
    info?:string
    descripcion?:string
    proposito?:string
    preferencias?:string
    caracteristicas?:string
    contenido?:string
    quien?:string
    actualizacion?:string
    entrega?:string
    email:string
    numero?:string
    horario?:string
  }

const resend = new Resend('re_ZDJWM19V_Lch4SmUHGSfdSBMPpZwg47US');

export const  resendEmail = async(dataEmail:FormInputs) => {

    const {name,info,descripcion,proposito,preferencias,caracteristicas,contenido,
          quien,actualizacion,entrega,email,numero,horario} = dataEmail;

    try {
        const data = await resend.emails.send({
            from:'onboarding@resend.dev',
            to:'luismllv89@gmail.com',
            subject: 'Encuesta Clientes Lumava',
            text:`
            Informacion de la empresa
            -----------------------------
            Nombre de la empresa: 
            -${name}
            Informacion de productos y servicios:
            -${info}
            Descripcion de productos y servicios:
            -${descripcion}
            Cual es el proposito principal del sitio?:
            -${proposito}
            Preferencias del diseño?:
            -${preferencias}
            Caracteristicas claves del sitio?:
            -${caracteristicas}
            Tipo de contenido que se mostrara?:
            -${contenido}
            Quien proporcionara el contenido?:
            -${quien}
            Como se manejara las actualizaciones futuras de la pagina?:
            -${actualizacion}
            Tiempo limite para entrega del proyecto?:
            -${entrega}
            Correo:
            -${email}
            Numero de contacto:
            -${numero}
            Horario de atencion:
            -${horario}

            `
            
          });
    
        console.log(data)
      } catch (error) {
        console.log(error)
      }
  
}