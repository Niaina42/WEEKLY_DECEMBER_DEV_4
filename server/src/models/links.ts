import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const model = {
    getAll: async () => {
        let result = await prisma.links.findMany()
        return result
    },
    getOne: async (id : number) => {
        let result = await prisma.links.findUnique({
            where: { id: Number(id) },
        })
        
        return result 
    },
    getByReduced: async (reduced : string) => {
        let result = await prisma.links.findUnique({
            where: { reduced: String(reduced) },
        })

        return result
    },
    getByUser: async (uid : number) => {
        let result = await prisma.links.findMany({
            where: { 
                user: {
                    id: uid
                }
            }
        })

        return result
    },
    search: async (query : string, id:number) => {

        let result = await prisma.links.findMany({
            where: {
                NOT: {
                    id: id,
                },
                OR: [
                    {
                        title: { contains: query }
                    },
                    {
                        reduced: { contains: query }
                    },
                    {
                        original: { contains: query }
                    }
                ]
            }
        })

        return result
    },
    create: async (title:string, original:string, reduced:string, uid:string) => {

        const result = await prisma.links.create({
            data: {
                title,
                original,
                reduced, 
                user: {
                    connect: {
                        id: parseInt(uid)
                    }
                }
            }
        })

        return result
    },
    update:  async (id:number, title:string, original:string, reduced:string) => {

        const result = await prisma.links.update({
            where: { id: Number(id) },
            data: {
                title,
                original,
                reduced
            }
        })

        return result
    },
    delete: async (id : number) => {

        let result = await prisma.links.delete({
            where: { id: Number(id) },
        })

        return result
    },
}

export default model