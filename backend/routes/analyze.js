import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function analyzeRoute(req, res) {
    try{
        //Get the journal text sent from frontend
        const { journalText } = req.body

        //basic validation
        if(!journalText || journalText.trim() === ''){
            return res.status(400).json({ error: 'Journal text cannot be empty'})
        }

        //Initialize Gemini model
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

        //This is our prompt - instructions we give to the AI
        const prompt = `
            You are a compassionate mental wellness assistant.
            Analyze this journal entry and respond ONLY in the exact JSON format, nothing else:

            {
                "mood_score": <number from 1 to 10, where 1 is very negative and 10 is very positive>,
                "emotion": "<single emotion word like Happy, Anxious, Sad, Excited, Stressed, Calm, Angry, Grateful>",
                "summary": "<one sentence describing the overall feeling>",
                "suggestions": [
                    "<practical suggestion 1>",
                    "<practical suggestion 2>"
                ]
            }

            Journal entry: "${journalText}
        `

        const result = await model.generateContent(prompt)
        const text = result.response.text()

        //Clean the response (remove markdown code blocks if Gemini adds them)
        const cleaned = text.replace(/```json|```/g, '').trim()

        //Parse the JSON response
        const analysis = JSON.parse(cleaned)

        res.json({ success: true, analysis})

    }  catch (error) {
        console.error('Error analyzing journal: ', error)
        res.status(500).json({ error: 'Something went wrong. Please try again.' })
    }  
}