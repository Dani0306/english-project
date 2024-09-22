import { cn } from '@/lib/utils'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const AboutMe = () => {

  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.25
  })

  return (
    <section id="aboutMe" ref={ref} className='w-full min-h-[70vh] mt-[100px] flex flex-col items-center justify-center'>
      <div className='flex flex-col lg:flex-row-reverse'>
        <div className={cn("flex flex-col items-center opacity-0 translate-x-[100px] transition-all duration-1000 justify-center space-y-5 lg:space-y-8", inView && "fadeInX")}>
          <h2 className='font-bold text-4xl md:text-5xl text-center lg:text-6xl'>¿Quién soy?</h2>
          <span className='font-semibold text-xl px-6 lg:px-0 text-center text-wrap my-10 lg:my-0'>Daniel Colorado - Estudiante de Ingeniería de Software</span>
          <p className='px-8 text-base text-justify text-wrap max-w-[600px]'>
            Soy Daniel Colorado, un apasionado estudiante de Ingeniería de Software en la universidad, y al mismo tiempo, 
            un amante del inglés. A lo largo de mis estudios, he perfeccionado mis habilidades en el idioma,
            lo que me ha llevado a crear este servicio dedicado a ayudar a estudiantes de primaria y secundaria
            con sus tareas y trabajos en inglés. Mi objetivo es ofrecer un servicio confiable y accesible que facilite
            el aprendizaje y el éxito en esta importante materia.
          </p>
        </div>
          <div className={cn("mx-auto lg:mx-0 w-[80%] h-[350px] flex opacity-0 translate-x-[-100px] transition-all duration-1000 items-center justify-center lg:h-[400hx] lg:w-[400px]", inView && "fadeInX")}>
            <img src="/teacher.png" className='size-full object-contain' alt="myself" />
          </div>
      </div>
    </section>
  )
}

export default AboutMe