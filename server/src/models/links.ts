import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const model = {
    getAll: async () => {
        let result = await prisma.links.findMany({
            orderBy: {
                id: "desc"
            }
        })
        return result
    },
    getOne: async (id : number) => {
        let result = await prisma.links.findUnique({
            where: { id: Number(id) },
            include: {
                qrcodes: true
            }
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
            },
            orderBy: {
                id: "desc"
            },
            include: {
                qrcodes: true
            }
        })

        return result
    },
    getWithQr: async (uid : number) => {
        let result = await prisma.links.findMany({
            where: { 
                user: {
                    id: uid
                },
                qrcodes: {
                    some: {}
                }
            },
            orderBy: {
                id: "desc"
            },
            include: {
                qrcodes: true
            }
        })

        return result
    },
    search: async (query : string) => {

        let result = await prisma.links.findMany({
            where: {
                OR: [
                    {
                        title: { contains: query }
                    },
                    {
                        reduced: { contains: query }
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