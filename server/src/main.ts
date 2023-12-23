import { Response, Request } from "express"
import express from "express"
import cors from "cors"
import userRoute from './routes/users'
import linkRoute from './routes/links'

const app = express()

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/',(req:Request, res:Response) => {
  res.send('Hello from Link Reducer API')
})

app.use('/users', userRoute)
app.use('/links', linkRoute)

app.listen(9091, () => console.log("Api listen on port 9091"))