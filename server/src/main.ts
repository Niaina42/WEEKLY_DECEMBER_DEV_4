import { Response, Request } from "express"
import express from "express"
import cors from "cors"
import userRoute from './routes/users'
import linkRoute from './routes/links'
import qrcodeRoute from './routes/qrcodes'
import model from './models/links'
import path from "path"

const app = express()

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, "../public")));

app.get('/',(req:Request, res:Response) => {
  res.send('Hello from Link Reducer API')
})

app.get('/:reduced', async (req:Request, res:Response) => {
  let { reduced } = req.params
  try {
    let targetLink = await model.getByReduced(reduced)
    if(targetLink) {
      res.redirect(targetLink.original);
    }
    else {
      res.status(404).send('Not found');
    }
  } catch (error) {
    res.status(400).send('Une érreur est survenu');
  }
})

app.use('/users', userRoute)
app.use('/links', linkRoute)
app.use('/qrcodes', qrcodeRoute)

app.listen(9091, () => console.log("Api listen on port 9091"))