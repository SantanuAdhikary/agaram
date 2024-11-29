import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'


let Hi = ()=>{
  return(
    <div>
      <h1> i am hi component</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
 
    <App />

)
