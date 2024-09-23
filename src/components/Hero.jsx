import React, { useEffect } from 'react'
import { Button, buttonVariants } from './ui/button'
import { Check } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

const Hero = () => {


  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.25
  })

  return (
    <section id="hero" ref={ref} className='w-full mt-[150px]'>
        <div className={cn("w-full flex flex-col items-center justify-center translate-y-[30px] opacity-0 transition-all duration-1000", inView && "fadeInY")}>
          <h1 className='px-6 lg:px-0 text-center font-bold text-5xl lg:text-7xl text-gray-950 text-wrap'>
              Tu Aliado en <span className='text-blue-600'>Inglés</span>
          </h1>
          <p className='text-base lg:text-xl font-light mt-10 max-w-[600px] lg:max-w-[700px] text-gray-950 px-6 lg:px-0 text-center text-wrap'>
            Estamos aquí para ayudarte a alcanzar el éxito en tus estudios de inglés, 
            Con nuestro servicio personalizado de tareas, trabajos, exámenes, talleres
            y más, ganar inglés nunca fue tan fácil.
          </p>
          <div className='flex space-x-4 mt-10'>
            <a href="https://wa.me/message/V5MPHQZBHTEPC1" className={buttonVariants("default")}>
              Contáctame
            </a>
            <a href="#services">
              <Button variant="ghost">
                Ver servicios &rarr;
              </Button>
            </a>
          </div>

          <div className='flex flex-col mt-10 space-y-1 px-6'>
            <div className='flex'>
                <Check className='size-5 text-blue-600 mr-2'/>
                <span className='text-sm'>
                  Cada trabajo garantiza los mejores resultados.
                </span>
              </div>
              <div className='flex'>
                <Check className='size-5 text-blue-600 mr-2'/>
                <span className='text-sm'>
                  Nos comprometemos a entregar tu tarea a tiempo.
                </span>
              </div>
              <div className='flex'>
                <Check className='size-5 text-blue-600 mr-2'/>
                <span className='text-sm'>
                  Trabajamos para que quedes completamente satisfecho.
                </span>
              </div>
          </div>
          <img className='mx-auto w-[90%] object-contain max-w-[500px]' src="/child.png" alt="" />
        </div>
    </section>
  )
}

export default Hero