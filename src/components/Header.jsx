'use client'
import useQuiosco from '@/hooks/useQuiosco'
import React, { useEffect } from 'react'

export default function Header({categoria}) {

    const { categoriaActual, setCategoriaActual } = useQuiosco()

    useEffect(() => {
        if (categoria) setCategoriaActual(categoria)
    }, [])
    
    return (
        <>
            <h1 className='text-4xl font-black'>{categoriaActual?.nombre}</h1>
            <p className='text-2xl my-10'>Elige y personaliza tu pedido a continuación</p>
        </>
    )
}
