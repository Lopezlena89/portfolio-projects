import Image from "next/image"


export const FormWeb = () => {

  const onSubmit = () =>{
    
  }

  return (
    <div className="w-3/6 h-4/6 bg-[#f3eee9] flex flex-col rounded-xl shadow-xl">
              <div className="w-full h-20 flex justify-between items-center">
                <h2 className="text-xl ml-5 text-amber-800 font-serif">BRIEF</h2>
                <Image
                  src='/logo-01.png' 
                  width={120} 
                  height={120} 
                  alt="Logo Lumaba"
                  className="mr-5"
                />
              </div>
              <form onSubmit={onSubmit}>
                <div className="w-full h-52 flex flex-col p-2">
                  <span className="font-serif text-lg"> Bloque 1:</span>
                  <span className=" font-serif text-lg"> Informacion de la empresa</span>
                  <label htmlFor="" className="mt-3">Nombre de la empresa:</label>
                  <input 
                    type="text" 
                    className="boton-menu mt-3 p-2 w-full h-10 outline-none border border-solid border-stone-300 rounded-md "  
                    placeholder="Nombre de la empresa"
                  />
                  <label htmlFor="" className="mt-3 ">Informacion de productos y servicios:</label>
                  <input 
                    type="text" 
                    className="boton-menu mt-3 p-2 w-full h-10 outline-none border border-solid border-stone-300 rounded-md "  
                    placeholder="Informacion de productos y servicios"
                  />
                </div>
              </form>
            
      </div>
  )
}
