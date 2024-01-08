import Header from '@/components/Header'
import ListadoProductos from '@/components/ListadoProductos'
import { getCategoria } from '@/data/ApiData'
import React from 'react'

export async function generateMetadata({ params, searchParams }, parent) {
    const categoria = await getCategoria(params.id)
    const { nombre } = categoria

    return {
        title: nombre,
        description: "Aquí puedes consultar todos los productos de la categoría " + nombre
    }
}


async function CategoriaPage({ params }) {

    const categoriaActual = await getCategoria(params.id)

    return (
        <>
            <Header categoria={categoriaActual}/>
            <ListadoProductos categoria={categoriaActual} />
        </>

    )
}

export default CategoriaPage

