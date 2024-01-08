'use client'

import { formatearDinero } from '@/helpers'
import useQuiosco from '@/hooks/useQuiosco'
import React, { useCallback, useEffect } from 'react'


const Total = () => {

  const {pedido, nombre, setNombre, total, setTotal, enviarPedido} = useQuiosco()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '';
  });

  useEffect(() => {
    comprobarPedido();
  }, [pedido, nombre]);

  useEffect(() => {
    const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0);
    setTotal(nuevoTotal);
  }, [total]);

  

  return (
    <>
      <h1 className='text-4xl font-black'>Datos y Total</h1>
      <p className='text-2xl my-10'>Confirma tu pedido a continuación</p>
      <form
        onSubmit={enviarPedido}
      >
        <div>
          <label htmlFor="nombre" className='block uppercase text-slate-800 font-bold'>Nombre</label>
          <input 
            id="nombre" type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className='bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md'></input>
        </div>
        <div className='mt-10'>
          <p className='text-2xl'>Total a pagar {''} <span className='font-bold'>{formatearDinero(total)}</span></p>
        </div>
        <div className='mt-5 '>
          <input className={`${
            comprobarPedido() ? 
              'bg-gray-200 cursor-not-allowed' 
              : ' bg-indigo-600 cursor-pointer'
            } w-full md:w-auto px-5 py-2 rounded uppercase text-center text-white font-bold`}
            type="submit"
            value='Confirmar pedido'
            disabled={comprobarPedido()}/>
        </div>
      </form>
    </>
  )
}

export default Total