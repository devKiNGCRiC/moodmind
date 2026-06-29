import Navbar from './components/Navbar'
import JournalForm from './JournalForm'
import Footer from './components/Footer'

function App() {
  return (
      <div className='min-h-screen bg-gray-950 text-white'>
        <Navbar />
        {/*Main content */}
        <main className='flex-1 max-w-xl mx-auto px-4 py-16 w-full'>
          <div className='text-center mb-10'>
            <h1 className='text-4xl font-bold text-green-400 mb-2'>Write Freely.</h1>
            <p className='text-gray-400 text-sm'>Understand Your Emotions. One entry at a time.</p>
          </div>
          <JournalForm/>
        </main>
        <Footer />
      </div>
  )
}

export default App
