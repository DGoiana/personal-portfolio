import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import WorkPage from './pages/WorkPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/work' element={<WorkPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
