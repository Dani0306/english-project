import React, { useState } from 'react'
import { Button, buttonVariants } from './ui/button'

const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleClick = () => {
        setShowNavbar(!showNavbar)
    }

  return (
    <nav className='w-full h-[8vh] fixed left-0 top-0 bg-white z-[5000]'>

        {/* RESPONSIVE NAVBAR */}

        <div className='lg:hidden w-full h-full flex items-center justify-between px-6'>
            <img src="/child.png" className='size-[45px] object-cover rounded-xl' alt="logo" />
            <h2 className='text-base'>Servicios de Inglés</h2>
            <button onClick={handleClick} className="flex flex-col items-center justify-center h-max w-max z-[4000]">
            <div className={`w-[20px] h-[2px] bg-black mb-[2px] transition-[transform] border-none duration-500 ${showNavbar && "openButton1"}`}></div>
            <div className={`w-[20px] h-[2px] bg-black my-[2px] transition-[transform] border-none duration-500 ${showNavbar && "opacity-0"}`}></div>
            <div className={`w-[20px] h-[2px] bg-black mt-[2px] transition-[transform] border-none translate-y-0 duration-500 ${showNavbar && "openButton2"}`}></div>
            </button>
        </div>

        <ul className={`lg:hidden primary-navigation z-[2050] ${showNavbar && "abrir add-shadow"}`}>

                <a href="#hero" className="w-full h-[55px] mt-[-55px] mb-[50px] flex items-center justify-start text-gray-950  className='text-gray-950 hover:font-semibold cursor-pointer transition-all duration-500'">
                    <img src="/child.png" className='size-[45px] object-cover rounded-xl' alt="logo" />
                </a>
                <a href="#aboutMe" className="w-full h-[55px] flex items-center justify-start text-gray-950  className='text-gray-950 hover:font-semibold cursor-pointer transition-all duration-500'">
                    Sobre mi
                </a>
                <a href="#proccess" className="w-full h-[55px] flex items-center justify-start text-gray-950  className='text-gray-950 hover:font-semibold cursor-pointer transition-all duration-500'">
                    Cómo funciona
                </a>                
                <a href="#services" className="w-full h-[55px] flex items-center justify-start text-gray-950  className='text-gray-950 hover:font-semibold cursor-pointer transition-all duration-500'">
                    Servicios
                </a>
                <a href="#pricing" className="w-full h-[55px] flex items-center justify-start text-gray-950  className='text-gray-950 hover:font-semibold cursor-pointer transition-all duration-500'">
                    Precios
                </a>     
        </ul>

        {/* DESKTOP NAVBAR */}

        <div className='hidden lg:flex w-full h-full items-center justify-between px-6'>
            <a href="#hero">
                <img src="/child.png" className='size-[45px] object-cover rounded-xl' alt="logo" />
            </a>
            <ul className='text-gray-900 text-sm font-light h-full flex items-center justify-center space-x-6'>
                <a href="#aboutMe" className='text-gray-950 hover:font-semibold cursor-pointer transition-all duration-500'>Sobre mi</a>
                <a href="#services" className='text-gray-950 hover:font-semibold cursor-pointer transition-all duration-500'>Servicios</a>
                <a href="#proccess" className='text-gray-950 hover:font-semibold cursor-pointer transition-all duration-500'>Cómo funciona</a>
                <a href="#pricing" className='text-gray-950 hover:font-semibold cursor-pointer transition-all duration-500'>Precios</a>
            </ul>
            <a href="#aboutMe" className={buttonVariants("default")}>Ver más</a>
        </div>
    </nav>
  )
}

export default Navbar