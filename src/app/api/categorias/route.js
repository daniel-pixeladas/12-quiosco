import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
    const categorias = await prisma.categorias.findMany({
        include: {
            productos: true
        }
    })
    return NextResponse.json(categorias)
}