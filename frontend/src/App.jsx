import { NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Registration from './pages/Registration.jsx'
import EmergencyContact from './pages/EmergencyContact.jsx'
import Dashboard from './pages/Dashboard.jsx'
import MemoryTest from './pages/MemoryTest.jsx'
import VoiceResponse from './pages/VoiceResponse.jsx'
import logo from './assets/Logo.png'

function App() {
  const location = useLocation()
  const showFlowNav =
    location.pathname === '/dashboard' ||
    location.pathname === '/memory-test' ||
    location.pathname === '/voice-response'

  return (
    <div className="app-shell">
      <div className="ipad-frame">
        {showFlowNav && (
          <nav className="flow-nav" aria-label="All pages">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flow-nav-btn ${isActive ? 'active' : ''}`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/memory-test"
              className={({ isActive }) =>
                `flow-nav-btn ${isActive ? 'active' : ''}`
              }
            >
              Memory Test
            </NavLink>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flow-nav-btn flow-nav-btn-logout ${isActive ? 'active' : ''}`
              }
            >
              Logout
            </NavLink>
          </nav>
        )}
        <Routes>
          <Route path="/" element={<Home logo={logo} />} />
          <Route path="/login" element={<Login logo={logo} />} />
          <Route path="/registration" element={<Registration logo={logo} />} />
          <Route
            path="/emergency-contact"
            element={<EmergencyContact logo={logo} />}
          />
          <Route path="/dashboard" element={<Dashboard logo={logo} />} />
          <Route path="/memory-test" element={<MemoryTest logo={logo} />} />
          <Route path="/voice-response" element={<VoiceResponse logo={logo} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
