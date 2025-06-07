import './App.css'
import { Group } from './components/Group'

function App() {

  return (
    <div className='w-full h-screen flex flex-col'>
      <p className="text-lg flex justify-center p-4 bg-blue-100">
        Rule Builder
      </p>
      <div className='w-full h-full p-4'>
        <Group/>
      </div>
    </div>
  )
}

export default App
