import { BrowserRouter as Router,Routes,Route,useNavigate } from 'react-router-dom'
import Home from  './componentes/Layout/Home'
import Retrieve from './componentes/Layout/Retrieve'
import './App.css'
import style from './componentes/Layout/Home.module.css'

function App() {
  
  const navigate = useNavigate()
  return (
    <Router>
      
      <div className={style.container}>
        {/* Fixed Header */}
        <h1>Directory App</h1>
        <div>
          <button onClick={() => navigate("/") }>Add New Person</button>
          <button onClick={() => navigate("/retrieve") }>Retrieve Information</button>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/retrieve" element={<Retrieve />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
