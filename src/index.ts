import express, { Request, Response } from 'express'

const app = express()

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(5000, () => {
  console.log('server is started')
})
