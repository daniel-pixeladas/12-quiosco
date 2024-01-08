import './globals.css'
import { Inter } from 'next/font/google'
import MainLayout from '@/components/layouts/MainLayout'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: `%s ${process.env.SITE_TITLE_SEPARATOR} ${process.env.SITE_TITLE_SUFIX}`,
    default: `${process.env.SITE_TITLE_SUFIX}`, // a default is required when creating a template
  },
  description: 'Sitio web para pedir comida'
}

export default async function RootLayout({ children }) {

  return (
    <html lang="es">
      <body className={inter.className}>
        <div id="__next">
          <MainLayout>{children}</MainLayout>    
        </div>

      </body>
    </html>
  )
}
