import { ToastContainer } from 'react-toastify'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Project from './pages/Project'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>

      <ToastContainer />
    </div>
  )
}

export default App
