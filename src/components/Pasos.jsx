'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'

const pasos = [
    {paso: 1, nombre: 'Menú', url: '/'}
    , {paso: 2, nombre: 'Resumen', url: '/resumen'}
    , {paso: 3, nombre: 'Datos y total', url: '/total'}
]

const Pasos = () => {

    const pathname = usePathname()

    const calcularProgreso = () => {
        let porcentaje
        if (pathname === '/') porcentaje = 10
        else if (pathname === '/resumen') porcentaje = 55
        else if (pathname === '/total') porcentaje = 100
        else porcentaje = 10
        return porcentaje
    }
  return (
    <>
        <div className='flex justify-between mb-5'>
            {pasos.map(paso => (
                <Link key={paso.paso} href={paso.url}>
                    <button className='text-2xl font-bold'>
                        {paso.nombre}
                    </button>
                </Link>
            ))}
        </div>
        <div className='bg-gray-100 mb-10'>
            <div className='rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white w-10'
            style={{width: `${calcularProgreso()}%`}}>

            </div>
        </div>
    </>
  )
}

export default Pasos