'use client'

import React, { useEffect } from 'react'
import Categoria from './Categoria'
import useQuiosco from '@/hooks/useQuiosco'

function ListaCategorias({ categorias }) {

    const {setCategorias} = useQuiosco()

    useEffect(() => {
        setCategorias(categorias)
    }, [])

    return (
        <>
            {categorias.map(categoria => (
                <Categoria key={categoria.id}
                    categoria={categoria}
                    categorias={categorias}
                />
            ))}
        </>
    )
}

export default ListaCategorias