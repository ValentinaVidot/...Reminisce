import { useNavigate } from 'react-router-dom'

function EmergencyContact({ logo }) {
  const navigate = useNavigate()

  return (
    <div className="screen form-page">
      <button
        className="back-button"
        onClick={() => navigate('/registration')}
        aria-label="Back to Registration"
      >
        ← Back
      </button>
      <p className="eyebrow page-eyebrow">Care Platform</p>
      <h2>Emergency Contact Setup</h2>
      <img className="page-logo" src={logo} alt="Reminisce center logo" />
      <div className="field-grid">
        <label>
          Caregiver Name
          <input type="text" placeholder="e.g., Angela Santos" />
        </label>
        <label>
          Phone Number
          <input type="tel" placeholder="+65 8123 4567" />
        </label>
        <label>
          Relationship
          <input type="text" placeholder="Daughter" />
        </label>
        <label>
          Backup Emergency Contact
          <input type="text" placeholder="David Santos, Son, +65 8765 4321" />
        </label>
      </div>
      <div className="button-row">
        <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>
          Save Contact
        </button>
        <button className="btn btn-warning">Test Emergency Alert</button>
      </div>
      <footer className="home-footer">💙 Caring for those who cared for us</footer>
    </div>
  )
}

export default EmergencyContact
