import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request, {params}) {
    const id = params.id
    const categoria = await prisma.categorias.findUnique({
        where: {
            id: parseInt(id)
        }
        , include: {
            productos: true
        }
    })
    return NextResponse.json(categoria)
}