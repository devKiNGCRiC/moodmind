import { useState } from 'react'
import Navbar from './components/Navbar'
import JournalForm from './JournalForm'
import Footer from './components/Footer'
import MoodResult from './components/MoodResult'

function App() {
  const [analysis, setAnalysis] = useState(null)

  return (
      <div className='min-h-screen flex flex-col text-white'>

        <Navbar />

        {/*Main content */}
        <main className='flex-1 max-w-xl mx-auto px-4 py-16 w-full'>
          <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold text-green-400 mb-2'>Write Freely.</h1>
            <p className='text-gray-400 text-sm'>Understand Your Emotions. One entry at a time.</p>
          </div>

          <JournalForm onResult={setAnalysis}/>
          <MoodResult analysis={analysis} />
        </main>

        <Footer />
      </div>
  )
}

export default App