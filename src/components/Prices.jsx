import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const Prices = () => {

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.25
    })

  return (
    <section id="pricing" ref={ref} className='w-full min-h-[70vh] my-[100px] flex flex-col items-center'>
        <h2 className={cn("font-bold text-4xl md:text-5xl text-center lg:text-6xl opacity-0 translate-x-[-100px] transition-all duration-1000", inView && "fadeInX")}>
           Los <span className='text-blue-600'>precios</span> más especiales
         </h2>
         <p className={cn("text-base lg:text-xl font-light mt-10 mb-16 max-w-[600px] lg:max-w-[700px] text-gray-950 px-6 lg:px-0 text-center text-wrap  opacity-0 translate-x-[100px] transition-all duration-1000", inView && "fadeInX")}>
             Ofrecemos los precios mas accesibles y económicos, adaptados a la dificultad y extensión del trabajo. ¡Escoge el servicio que mejor se adapte a tus necesidades!
        </p>
        <div className='w-full flex items-center justify-center space-x-3 lg:space-x-4'>
            <div className={cn("w-[28%] lg:w-[20%] h-[220px] sm:h-[350px] lg:h-[400px] flex flex-col items-center border add-shadow rounded-2xl  opacity-0 translate-x-[-100px] transition-all duration-1000", inView && "fadeInX")}>
                <div className='w-full h-[20%] bg-orange-400 flex items-center justify-center rounded-t-xl'>
                    <h2 className='font-medium text-xl text-center text-white  md:text-2xl lg:text-3xl'>Básico</h2>
                </div>
                <div className='w-full h-[60%] flex flex-col items-start px-4 space-y-3 justify-center'>
                    <span className='text-xs sm:text-sm md:text-base lg:text-xl flex items-center justify-center'>
                        <Check className='size-4 text-green-600 mr-2'/>
                        {" "} Tareas
                    </span>
                    <span className='text-xs sm:text-sm md:text-base lg:text-xl flex items-center justify-center'>
                        <Check className='size-4 text-green-600 mr-2'/>
                        {" "} Gramática
                    </span>
                    <span className='text-xs sm:text-sm md:text-base lg:text-xl flex items-center justify-center'>
                        <Check className='size-4 text-green-600 mr-2'/>
                        {" "} Vocabulario
                    </span>
                    <span className='text-xs sm:text-sm md:text-base lg:text-xl flex items-center justify-center'>
                        <Check className='size-4 text-green-600 mr-2'/>
                        {" "} Cortas
                    </span>
                </div>
                <div className='w-full h-[20%] border-b-2xl flex items-center justify-center'>
                    <span className='text-xs sm:text-sm md:text-base lg:text-xl text-orange-600'>
                        12.000 - 15.000 <span className='hidden sm:inline'>$</span>
                    </span>
                </div>
            </div>
            <div className={cn("w-[28%] lg:w-[20%] h-[250px] sm:h-[400px] lg:h-[450px] flex flex-col items-center border add-shadow rounded-2xl opacity-0 translate-y-[100px] transition-all duration-1000", inView && "fadeInY")}>
                <div className='w-full h-[20%] bg-blue-600 flex items-center justify-center rounded-t-xl'>
                    <h2 className='font-medium text-xl md:text-2xl lg:text-3xl text-center text-white'>Medio</h2>
                </div>
                <div className='w-full h-[60%] flex flex-col items-start px-4 space-y-3 justify-center'>
                    <span className='text-xs sm:text-sm md:text-base lg:text-xl flex items-center justify-center'>
                        <Check className='size-4 text-green-600 mr-2'/>
                        {" "} Talleres
                    </span>
                    <span className='text-xs sm:text-sm md:text-base lg:text-xl flex items-center justify-center'>
                        <Check className='size-4 text-green-600 mr-2'/>
                        {" "} Ensayos
                    </span>
                    <span className='text-xs sm:text-sm md:text-base lg:text-xl flex items-center justify-center'>
                        <Check className='size-4 text-green-600 mr-2'/>
                        {" "} Exámenes
                    </span>
                </div>
                <div className='w-full h-[20%] border-b-2xl flex items-center justify-center'>
                    <span className='text-xs sm:text-sm md:text-base lg:text-2xl text-blue-600'>
                        15.000 - 20.000 <span className='hidden sm:inline'>$</span>
                    </span>
                </div>
            </div>
            <div className={cn("w-[28%] lg:w-[20%] h-[220px] sm:h-[350px] lg:h-[400px] flex flex-col items-center border add-shadow rounded-2xl  opacity-0 translate-x-[100px] transition-all duration-1000", inView && "fadeInX")}>
                <div className='w-full h-[20%] bg-purple-600 flex items-center justify-center rounded-t-xl'>
                    <h2 className='font-medium text-xl text-center text-white md:text-2xl lg:text-3xl'>Avanzado</h2>
                </div>
                <div className='w-full h-[60%] flex flex-col items-start px-4 space-y-3 justify-center'>
                    <span className='text-xs sm:text-sm md:text-base lg:text-xl flex items-center justify-center'>
                        <Check className='size-4 text-green-600 mr-2'/>
                        {" "} Proyectos
                    </span>
                    <span className='text-xs sm:text-sm md:text-base lg:text-xl flex items-center justify-center'>
                        <Check className='size-4 text-green-600 mr-2'/>
                        {" "} Finales
                    </span>
                    <span className='text-xs sm:text-sm md:text-base lg:text-xl flex items-center justify-center'>
                        <Check className='size-4 text-green-600 mr-2'/>
                        {" "} Extensivos
                    </span>
                </div>
                <div className='w-full h-[20%] border-b-2xl flex items-center justify-center'>
                    <span className='text-xs sm:text-sm md:text-base lg:text-2xl text-purple-600'>
                        40.000 <span className='hidden sm:inline'>$</span>
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Prices