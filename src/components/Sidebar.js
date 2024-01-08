import Image from 'next/image'
import { getCategorias } from '@/data/ApiData'
import ListaCategorias from './ListaCategorias'

async function Sidebar() {

  const categorias =  await getCategorias() 
  
  return (
    <>
      <Image 
        src="/assets/img/logo.svg"
        alt="Logotipo"
        className='text-center inline'
        priority={true}
        width={150} height={150}
        style={{
          width: '150px',
          height: 'auto',
        }}
      />
      <nav className='mt-10'>
          <ListaCategorias categorias={categorias}/>
      </nav>
    </>

  )
}

export default Sidebar