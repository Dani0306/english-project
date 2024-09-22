import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useState, useEffect } from 'react'
import { useInView } from "react-intersection-observer"

const  CAROUSEL_ITEMS = [
  {
    title: "Tareas y Talleres de Inglés", 
    description: "Te ayudamos a realizar tus tareas y talleres de inglés de manera rápida y efectiva.", 
    imageSrc: "/tarea.png"
  },
  {
    title: "Traducciones", 
    description: "Ofrecemos traducciones rápidas y precisas de textos en inglés y español. Ya sea para trabajos escolares o proyectos personales, nuestras traducciones mantienen el sentido original del texto.", 
    imageSrc: "/translations.png"
  },
  {
    title: "Ensayos y Redacciones", 
    description: "Si necesitas escribir un ensayo o redacción en inglés, te ayudamos a estructurarlo y a expresar tus ideas de manera clara y coherente.", 
    imageSrc: "/homework.png"
  },
  {
    title: "Exámenes y Refuerzos", 
    description: "Realizamos tus exámenes de inglés junto con tus talleres de refuerzos.", 
    imageSrc: "/test.png"
  },
  {
    title: "Projectos", 
    description: "Realizamos tus proyectos de inglés asegurando la mejor consistencia.", 
    imageSrc: "/project.png"
  },
  
]


const Services = () => {

  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.25
  })

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])


  return (
    <section id="services" ref={ref} className='w-full mt-[100px] min-h-[70vh] lg:min-h-[90vh] flex flex-col items-center justify-center'>
         <h2 className={cn("font-bold text-4xl md:text-5xl text-center lg:text-6xl opacity-0 translate-x-[-150px] transition-all duration-1000", inView && "fadeInX")}>
           Servicios de <span className='text-blue-600'>Inglés</span> disponibles
         </h2>
         <p className={cn("text-base lg:text-xl font-light mt-10 max-w-[600px] lg:max-w-[700px] text-gray-950 px-6 lg:px-0 text-center text-wrap opacity-0 translate-x-[100px] transition-all duration-1000", inView && "fadeInX")}>
         Se ofrece una amplia gama de servicios para estudiantes de primaria y secundaria. ¡Aquí encontrarás el apoyo que necesitas para sobresalir en tus tareas de inglés! en donde se incluye:
        </p>
        <Carousel className={cn("my-20 max-w-[290px] md:min-w-[70%] lg:max-w-[700px] opacity-0 translate-y-[-100px] transition-all duration-1000", inView && "fadeInY")} setApi={setApi}>
          <CarouselContent>
            <CarouselItem>
              <div className='justify-center lg:justify-normal add-carousel-shadow mx-auto w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[250px] lg:h-[300px] flex items-center flex-col p-2 space-y-3 lg:space-y-6'>
                <h1 className='text-base text-center lg:text-xl font-semibold'>{CAROUSEL_ITEMS[0].title}</h1>
                <p className='text-center hidden lg:inline text-sm px-4'>{CAROUSEL_ITEMS[0].description}</p>
                <img className='size-[120px] object-cover' src={CAROUSEL_ITEMS[0].imageSrc} alt="image" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='justify-center lg:justify-normal add-carousel-shadow mx-auto w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[250px] lg:h-[300px] flex items-center flex-col p-2 space-y-3 lg:space-y-6'>
                <h1 className='text-base text-center lg:text-xl font-semibold'>{CAROUSEL_ITEMS[1].title}</h1>
                <p className='text-center hidden lg:inline text-sm px-4'>{CAROUSEL_ITEMS[1].description}</p>
                <img className='size-[120px] object-cover' src={CAROUSEL_ITEMS[1].imageSrc} alt="image" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='justify-center lg:justify-normal add-carousel-shadow mx-auto w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[250px] lg:h-[300px] flex items-center flex-col p-2 space-y-3 lg:space-y-6'>
                <h1 className='text-base text-center lg:text-xl font-semibold'>{CAROUSEL_ITEMS[2].title}</h1>
                <p className='text-center hidden lg:inline text-sm px-4'>{CAROUSEL_ITEMS[2].description}</p>
                <img className='size-[120px] object-cover' src={CAROUSEL_ITEMS[2].imageSrc} alt="image" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='add-carousel-shadow mx-auto w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[250px] lg:h-[300px] flex items-center justify-center lg:justify-normal flex-col p-2 space-y-3 lg:space-y-6'>
                <h1 className='text-base text-center lg:text-xl font-semibold'>{CAROUSEL_ITEMS[3].title}</h1>
                <p className='text-center hidden lg:inline text-sm px-4'>{CAROUSEL_ITEMS[3].description}</p>
                <img className='size-[120px] object-cover' src={CAROUSEL_ITEMS[3].imageSrc} alt="image" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='add-carousel-shadow mx-auto w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[250px] lg:h-[300px] flex items-center justify-center lg:justify-normal flex-col p-2 space-y-3 lg:space-y-6'>
                <h1 className='text-base text-center lg:text-xl font-semibold'>{CAROUSEL_ITEMS[4].title}</h1>
                <p className='text-center hidden lg:inline text-sm px-4'>{CAROUSEL_ITEMS[4].description}</p>
                <img className='size-[120px] object-cover' src={CAROUSEL_ITEMS[4].imageSrc} alt="image" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </section>
  )
}

export default Services