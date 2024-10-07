import style from './Home.module.css'
import {useNavigate } from 'react-router-dom'


 const Header = () => {

    const  navigate = useNavigate()
  return (

    <div className={style.container}>
        {/* Fixed Header */}
        <h1>Directory App</h1>
        <div>
          <button onClick={() => navigate("/") }>Add New Person</button>
          <button onClick={() => navigate("/retrieve") }>Retrieve Information</button>
        </div>
    </div>
  )
}

export default Header;


