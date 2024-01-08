import Header from "@/components/Header"
import ListadoProductos from "@/components/ListadoProductos"

export const metadata = {
  title: `Inicio ${process.env.SITE_TITLE_SEPARATOR} ${process.env.SITE_TITLE_SUFIX}`,
  description: 'Página de inicio del quiosco' 
}

export default function Home() {
  return (
    <>
      <Header />
      <ListadoProductos />
    </>
  )
}

// Aquí podemos hacer apps fullstack atacando directamente a la base de datos. 
// async function getCategorias() {
//   const prisma = new PrismaClient()
//   const categorias = await prisma.categorias.findMany()
//   return categorias
// }
