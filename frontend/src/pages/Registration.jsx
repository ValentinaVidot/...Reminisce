import { useNavigate } from 'react-router-dom'

function Registration({ logo }) {
  const navigate = useNavigate()

  return (
    <div className="screen form-page">
      <button
        className="back-button"
        onClick={() => navigate('/')}
        aria-label="Back to Home"
      >
        ← Back
      </button>
      <p className="eyebrow page-eyebrow">Care Platform</p>
      <h2>Patient Registration</h2>
      <img className="page-logo" src={logo} alt="Reminisce center logo" />
      <p className="lead">Caregiver onboarding form.</p>
      <div className="field-grid">
        <label>
          Patient Name
          <input type="text" placeholder="e.g., Maria Santos" />
        </label>
        <label>
          Age
          <input type="number" placeholder="e.g., 74" />
        </label>
        <label>
          Family Medical History
          <textarea placeholder="Include dementia, diabetes, stroke history." />
        </label>
        <label>
          Medication History
          <textarea placeholder="List previous medications and reactions." />
        </label>
        <label>
          Medication Schedule
          <input type="text" placeholder="Morning 8:00 AM, Evening 8:00 PM" />
        </label>
        <label>
          Important Dates
          <input type="text" placeholder="Neurology checkup: 20 Mar 2026" />
        </label>
      </div>
      <div className="button-row">
        <button className="btn btn-secondary">Save</button>
        <button
          className="btn btn-primary"
          onClick={() => navigate('/emergency-contact')}
        >
          Continue
        </button>
      </div>
      <footer className="home-footer">💙 Caring for those who cared for us</footer>
    </div>
  )
}

export default Registration
