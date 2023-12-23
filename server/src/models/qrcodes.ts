import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const model = {
    getAll: async () => {
        let result = await prisma.qrcodes.findMany({
            orderBy: {
                id: "desc"
            }
        })
        return result
    },
    getOne: async (id : number) => {
        let result = await prisma.qrcodes.findUnique({
            where: { id: Number(id) },
        })
        
        return result 
    },
    create: async (path:any, link_id:number) => {
        const result = await prisma.qrcodes.create({
            data: {
                qrcode: path,
                link: {
                    connect: {
                        id: link_id
                    }    
                }
            }
        })

        return result
    },
    delete: async (id : number) => {

        let result = await prisma.qrcodes.delete({
            where: { id: Number(id) },
        })

        return result
    },
}

export default model