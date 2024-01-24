import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Send from './pages/Send'

function App() {
  return (
    <div className='m-10'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/send' element={<Send />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
