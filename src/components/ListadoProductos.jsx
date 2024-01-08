'use client'
import React, { useEffect } from 'react'
import Modal from 'react-modal'
import Producto from './Producto'
import useQuiosco from '@/hooks/useQuiosco'
import ModalProducto from './ModalProducto';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#__next');

function ListadoProductos({ categoria }) {

    const { categoriaActual, setCategoriaActual, modal, producto} = useQuiosco()

    useEffect(() => {
        if (categoria) setCategoriaActual(categoria)
    }, [])

    return (
        <div className='grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {categoriaActual?.productos?.map(producto => (
                <Producto producto={producto} key={producto?.id} />
            ))
            }
            {modal && (
                <Modal
                    isOpen={modal}
                    style={customStyles}>
                    <ModalProducto producto={producto}/>
                </Modal>
            )}
            <ToastContainer />
        </div>
    )
}

export default ListadoProductos