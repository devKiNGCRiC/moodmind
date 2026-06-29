function JournalForm(){
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
            />
            {/*Button */}
            <button className="mt-4 w-full bg-green-400 text-black font-bold py-3 rounded-xl hover:bg-green-400 transition-colors">
                Analyze My Mood ॐ
            </button>
        </div>
    )
}

export default JournalForm