import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'



const port = process.env.PORT || 4000
const app = express();

app.use(express.json())
app.use(cors())
await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (_req, res) => {
    res.send('API Working')
});

app.listen(port, () => console.log(`Server started on PORT: ${port}`))


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4M2IxNjdjMjc5YjY4ZWE2YzM4ZTYyOCIsImlhdCI6MTc0ODcwMzExNH0.-JpwZDMa_ZZmaor4BKBrErfgMp4jxPlkV_zcGRIBiBo-Login token

