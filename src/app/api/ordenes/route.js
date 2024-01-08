import { PrismaClient } from "@prisma/client"


export async function POST(request) {
    const prisma = new PrismaClient()

    const req = await request.json()

    const orden = await prisma.ordenes.create({
        data: {
            nombre: req.nombre,
            total: req.total,
            fecha: req.fecha,
            pedido: req.pedido
        }
    })

    console.log(req)
    return Response.json({ orden })
}

export async function GET(request) {
    return Response.json({ test: "test" });
}
