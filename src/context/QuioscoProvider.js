'use client'

import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const QuioscoContext = createContext()

function QuioscoProvider({ children }) {

  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const [producto, setProducto] = useState({})
  const [modal, setModal] = useState(false)
  const [pedido, setPedido] = useState([])
  const [nombre, setNombre] = useState('')
  const [total, setTotal] = useState(0);

  // const handleClickProducto = (id) => {
  const router = useRouter();

  // const handleClickCategoria = (id) => {
  //   const categoria = categorias.filter((cat) => cat.id === id)[0]
  //   setCategoriaActual(categoria)
  // }

  useEffect(() => {
    setCategoriaActual(categorias[0])
  }, [categorias])

  const handleSetProducto = (producto) => { 
    setProducto(producto)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  // Esta primera línea es muy interesante {categoria_id, imagen, ...producto}
  // Lo que hace es quitar al objeto producto los campos categoria_id, imagen
  const handleAgregarPedido = ({categoria_id, ...producto}) => {
    if (pedido.some(productoState => productoState.id === producto.id)) {
      // El producto ya está en el pedido, hay que actualizar
      const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
      setPedido(pedidoActualizado)
      toast('Pedido modificado')
    } else {
      setPedido([...pedido, producto])
      toast('Producto agregado al pedido')
    }
    setModal(false)
    
  }

  const handleEditarCantidades = (id, cantidad) => {
    const productoActualizar = pedido.filter(producto => producto.id === id)[0]
    setProducto(productoActualizar)
    setModal(!modal);
  }

  const handleEliminarProducto = (id) => {
    const pedidoActualizado = pedido.filter(producto => producto.id !== id)
    setPedido(pedidoActualizado)
    toast('Producto eliminado del pedido')
  }

  const enviarPedido = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('/api/ordenes', {pedido, nombre, total, fecha: new Date()})
      
      // Resetear la app
      setCategoriaActual(categorias[0]);  
      setPedido([]);
      setNombre('');
      setTotal(0);

      toast('Pedido realizado correctamente');

      setTimeout(() => {
        router.push('/');
      }, 3000);


    } catch (error) {
      console.log(error);
    }

    console.log(pedido);
    console.log(nombre);
    console.log(total);
  }

  return (
    <QuioscoContext.Provider value={{
      categorias,
      setCategorias,
      categoriaActual,
      setCategoriaActual,
      producto,
      handleSetProducto,
      modal,
      handleChangeModal,
      handleAgregarPedido,
      handleEditarCantidades, 
      handleEliminarProducto,
      pedido,
      setPedido,
      nombre, 
      setNombre,
      total,
      setTotal,
      enviarPedido
    }}>
      {children}
    </QuioscoContext.Provider>
  )
}

export default QuioscoProvider

export {
  QuioscoContext
}