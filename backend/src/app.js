import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

app.use(cors({
  // origin:process.env.CORS_ORIGIN,
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials:true
}));
app.use(express.json({
  limit:'16kb'
}))

app.use(express.urlencoded({
  extended:true,
  limit:"16kb"
}))
app.use(cookieParser()) 

import genieRouter from './routes/gemini.routes.js'
import userRouter from './routes/user.routes.js'
app.get('/',(req,res)=>{
  res.send(`<h1>Hello</h1>`)
})
app.use('/api/v1/users/',genieRouter)
app.use('/api/v1/users/',userRouter)

export {app}