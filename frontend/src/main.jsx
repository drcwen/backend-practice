import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login'
import Announcement from './Announcement'
import SignUp from './SignUp'
import Home from './Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
