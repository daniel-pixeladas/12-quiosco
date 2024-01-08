
import React from 'react'

const apiUrl = process.env.API_URL ? process.env.API_URL : '/api'

async function getCategorias() {
    const url = `${apiUrl}/categorias`
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error('Error recuperando las categorías de la API')
    }
    const datos = await res.json()
    return datos
}

export async function getCategoria(id) {
    const url = `${apiUrl}/categorias/${id}`
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error('Error recuperando las categorías de la API')
    }
    const datos = await res.json()
    return datos
}

export {
    getCategorias
} 