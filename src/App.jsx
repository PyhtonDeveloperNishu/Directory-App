import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from  './componentes/Layout/Home'
import Retrieve from './componentes/Layout/Retrieve'
import './App.css'
import style from './componentes/Layout/Home.module.css'

function App() {
  

  return (
    <Router>
      
      <div className={style.container}>
        {/* Fixed Header */}
        <h1>Directory App</h1>
        <div>
          <button onClick={() => window.location.href = "/"}>Add New Person</button>
          <button onClick={() => window.location.href = "/retrieve"}>Retrieve Information</button>
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
