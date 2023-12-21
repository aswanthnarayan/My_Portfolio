import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './App.module.scss'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
        <div className={styles.app}>
         <Home/>
      </div>
    </Router>
  )
}

export default App
