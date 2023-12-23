import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const model = {
    getAll: async () => {
        let result = await prisma.users.findMany()
        return result
    },
    getOne: async (id : number) => {
        let result = await prisma.users.findUnique({
            where: { id: Number(id) },
        })
        
        return result 
    },
    getByEmail: async (email : string) => {
        let result = await prisma.users.findUnique({
            where: { email: String(email) },
        })

        return result
    },
    search: async (query : string, id:number) => {

        let result = await prisma.users.findMany({
            where: {
                NOT: {
                    id: id,
                },
                OR: [
                    {
                        email: { contains: query }
                    },
                    {
                        name: { contains: query }
                    },
                    {
                        last_name: { contains: query }
                    }
                ]
            }
        })

        return result
    },
    create: async (name:string, last_name:string, email:string, password:string) => {

        const result = await prisma.users.create({
            data: {
                name,
                last_name,
                email, 
                password
              },
        })

        return result
    },
    update:  async (name:string, last_name:string, email:string, id:number) => {

        const result = await prisma.users.update({
            where: { id: Number(id) },
            data: {
                name,
                last_name,
                email, 
            },
        })

        return result
    },
    delete: async (id : number) => {

        let result = await prisma.users.delete({
            where: { id: Number(id) },
        })

        return result
    },
}

export default model