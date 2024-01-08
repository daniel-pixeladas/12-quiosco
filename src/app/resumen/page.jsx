'use client'
import ResumenProducto from '@/components/ResumenProducto'
import useQuiosco from '@/hooks/useQuiosco'
import React from 'react'

const Page = () => {
  const { pedido } = useQuiosco()
  // console.log(pedido)

  return (
    <>
      <h1 className='text-4xl font-black'>Resumen del pedido</h1>
      <p className='text-2xl my-10'>Revisa tu pedido</p>

      {pedido?.length === 0 ? (
        <p className='text-center text-2xl'>No hay elementos en tu pedido</p>
      ) : (
        pedido.map(produto => (
          <ResumenProducto key={produto.id} producto={produto} />
        ))
      )}
    </>
  )
}

export default Page