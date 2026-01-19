import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login'
import Announcement from './Announcement'
import SignUp from './SignUp'
import Home from './Home'
import Responsive from './Responsive'
import Apparel from './Apparel'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Apparel />
  </StrictMode>,
)
