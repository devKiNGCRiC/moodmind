import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { analyzeRoute } from './routes/analyze.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

//Test route
app.get('/' , (req,res) => {
    res.send('MoodMind backend is alive! ✦')
})

//Main AI route
app.post('/analyze', analyzeRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})