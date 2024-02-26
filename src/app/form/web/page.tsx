'use client'

import { Input} from "@nextui-org/react";
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {  SubmitHandler, useForm } from 'react-hook-form';
import Swal from "sweetalert2";

import { resendEmail } from "@/utils/resend-email";



interface FormInputs{
  name:string
  info:string
  descripcion:string
  proposito:string
  preferencias:string
  caracteristicas:string
  contenido:string
  quien:string
  actualizacion:string
  entrega:string
  email:string
  numero:string
  horario:string
}

export default function PageForm() {
  const { register, handleSubmit,formState: {errors} } = useForm<FormInputs>();
  
  const onSubmit:SubmitHandler<FormInputs>  = async(data) =>{
    const {name,email} = data;
    if(name && email) swall()
    resendEmail(data)
  }
  const swall = ()=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Tu mensaje ha sido enviado",
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <>
        <div className="w-full h-full  flex justify-center items-center">
            <div className="box-principal  h-5/6 w-5/6 flex rounded-xl backdrop-blur-sm bg-white/10 "> 
              <div className="w-full  p-5  lg:w-1/2">
                <div className="w-full h-20 flex justify-end items-center">
                  
                  <Image
                    src='/LOGO-03.webp' 
                    width={120} 
                    height={120} 
                    alt="Logo Lumaba"
                    className="mr-5 w-auto h-auto "
                  />
                </div>
                <form 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="w-full h-5/6"  
                >
                    <Swiper
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="h-full"

                    >
                    <SwiperSlide className="">
                    <div className="w-full h-full flex flex-col items-start  p-2">
                     
                      <span className=" text-lg text-white font-bold"> Informacion de la empresa</span>
                      {/* <span  className=" mt-3 text-white">Nombre de la empresa:</span> */}
                      <Input 
                          type="text"
                          label="Nombre de la empresa:"
                          isInvalid={errors.name ? true :false}
                         
                          errorMessage={errors.name && "El nombre es requerido"}
                          className=" mt-5 outline-none text-left"
                          { ...register('name',{required:true} )}
                          name='name'
                          
                      />
                      
                      <Input 
                          type="text"
                          label="Informacion de productos y servicios:"
                          className=" mt-5 outline-none"
                          { ...register('info') }
                          name='info'
                      />
                       
                       <Input 
                          type="text"
                          label="Descripcion de productos/Servicios:"
                          className=" mt-5 outline-none"
                        { ...register('descripcion') }
                        name='descripcion'
                      />
                    </div>

                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="w-full h-full flex flex-col  items-start p-2 overflow-auto ">
                        <span className=" font-serif text-lg text-white font-bold"> Informacion del proyecto</span>
                        <Input 
                          type="text"
                          label=" Proposito principal del sitio:"
                          className=" mt-5 outline-none "
                          { ...register('proposito') }
                          name='proposito'
                        />
                        <Input 
                          type="text"
                          label="Preferencias del diseño:"
                          className=" mt-5 outline-none "
                          { ...register('preferencias') }
                          name='preferencias'
                        />
                        
                        <Input 
                          type="text"
                          label="Caracteristicas clave del sitio:"
                          className=" mt-5 outline-none "
                          { ...register('caracteristicas') }
                          name='caracteristicas'
                        />
                        
                        <Input 
                          type="text"
                          label="Tipo de contenido que se mostrara:"
                          className=" mt-5 outline-none "
                          { ...register('contenido') }
                          name='contenido'
                        />
                        <Input 
                          type="text"
                          label="Quien proporcionara el contenido:"
                          className=" mt-5 outline-none"
                          { ...register('quien') }
                          name='quien'
                        />
                      </div>

                    </SwiperSlide>
                    
                    <SwiperSlide>
                       <div className="w-full h-full flex flex-col  items-start  p-2">
                        
                        <span className=" font-serif text-lg text-white font-bold"> Contacto</span>
                        
                        <Input 
                          type="email"
                          label="Correo:"
                          isInvalid={errors.name ? true :false}
                          errorMessage={errors.name && "El correo es requerido"}
                          className=" mt-5 outline-none text-left"
                          { ...register('email',{required:true} )}
                          name='email'
                      />
                        <Input 
                          type="text"
                          label="Numero de contacto:"
                          className=" mt-5 outline-none"
                          { ...register('numero') }
                          name='numero'
                        />
                        <Input 
                          type="text"
                          label="Horario de atencion:"
                          className=" mt-5 outline-none"
                          { ...register('horario') }
                          name='horario'
                        />
                        
                        <button
                        type="submit"
                        className="w-full h-12  mt-7 rounded-xl text-white bg-fuchsia-700 active:bg-fuchsia-900  "
                        >
                          Enviar
                        </button>  
                        
                      </div>
                      
                      
                     
                    </SwiperSlide>
                  </Swiper>
                </form>
                
              </div>
              <div className="h-full w-0  bg-[url('/fondo-2.webp')] flex rounded-xl  lg:w-1/2">
               
              </div>
            </div>
        </div>
    </>
  )
}
