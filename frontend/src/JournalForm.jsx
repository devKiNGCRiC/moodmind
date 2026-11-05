import { useState } from "react"

function JournalForm({ onResult }){

    const [journalText, setJournalText] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function handleSubmit() {
        //Don't submit empty text
        if (journalText.trim() === ''){
            setError('Please write something first')
            return
        }

        setError('')
        setLoading('')

        try {
            const response = await fetch('https://localhost:5000/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ journalText })
            })

            const data = await response.json()

            if(!response.ok) {
                throw new Error(data.error || 'something went wrong')
            }

            // Send the result up to the parent component (App.jsx)
            onResult(data.analysis)
            setJournalText('')  // clear the textarea after success

        }catch(err){
            setError('Failed to analyze. Is the backend running?')
            console.error(err)
        } finally{
            setLoading(false)
        }
    }

    return(
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full">
            {/*Label */}
            <label className="text-gray-400 text-sm mb-2 block">
                How are you feeling today?
            </label>
            {/*Textarea */}
            <textarea className="w-full bg-gray-900 text-white border border-gray-600 rounded-xl p-4 text-sm resize-none focus:border-green-400 transition-colors"
                rows={6}
                placeholder="Write anything... your thoughts, your day, how you're feeling. No judgement here."
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
            />

            {error && (
                <p className="text-red-400 text-sm mt-2">{error}</p>
            )}

            {/*Button */}
            <button 
                onClick={handleSubmit}
                disabled={loading}
                className="mt-4 w-full bg-green-400 text-black font-bold py-3 rounded-xl hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Analyzing...' : 'Analyze My Mood ॐ'}
            </button>
        </div>
    )
}

export default JournalForm