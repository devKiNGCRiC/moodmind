function MoodResult({ analysis }){
    if (!analysis) return null

    return (
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full mt-6" >
            <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm">Mood Score</span>
                <span className="text-2xl font-bold text-green-400">
                    {analysis.mood_score}/10
                </span>
            </div>

            <div className="mb-4">
                <span className="inline-block bg-green-400/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                    {analysis.emotion}
                </span>
            </div>

            <p className="text-white text-sm mb-4">
                {analysis.summary}
            </p>

            <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-xs mb-2">Suggestions for you:</p>
                <ul className="space-y-2">
                    {analysis.suggestions.map((suggestion, index) => (
                        <li key={index} className="text-gray-300 text-sm flex gap-2">
                            <span>→</span>
                            {suggestion}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MoodResult