'use client'

import useQuiosco from '@/hooks/useQuiosco'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Categoria = ({ categoria, categorias }) => {
    const { nombre, icono, id } = categoria
    const { categoriaActual } = useQuiosco()


    return (
        <Link href={`/categorias/${id}`}>
            <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} flex items-center gap-2 border-no w-full border p-5 hover:bg-amber-400`}>

                <Image
                    width={60}
                    height={60}
                    src={`/assets/img/icono_${icono}.svg`}
                    alt='Imagen icono'
                    className='mr-5'
                    style={{ width: '60px', height: 'auto' }}
                />

                <button type='button'
                    className='text-xl font-bold hover:cursor-pointer'
                >
                    {nombre}
                </button>
            </div>
        </Link>
    )
}

export default Categoria