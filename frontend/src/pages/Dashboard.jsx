import { useNavigate } from 'react-router-dom'

function Dashboard({ logo }) {
  const navigate = useNavigate()

  return (
    <div className="screen">
      <p className="eyebrow page-eyebrow">Care Platform</p>
      <h2>Home Dashboard</h2>
      <img className="page-logo" src={logo} alt="Reminisce center logo" />
      <div className="stat-grid">
        <div className="card">
          <div className="card-row">
            <div>
              <p className="card-title">Today&apos;s Medication Reminder</p>
              <p>Next: Donepezil 5mg at 8:00 PM</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              💊
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-row">
            <div>
              <p className="card-title">Daily Memory Test Status</p>
              <p>Pending</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              🧠
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-row">
            <div>
              <p className="card-title">Latest Cognitive Score</p>
              <p>78 / 100</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              📈
            </span>
          </div>
        </div>
        <div className="card emergency-normal">
          <div className="card-row">
            <div>
              <p className="card-title">Emergency Status Indicator</p>
              <p>Normal</p>
            </div>
            <span className="card-icon" aria-hidden="true">
              ⚠️
            </span>
          </div>
        </div>
      </div>
      <div className="action-stack">
        <button className="btn btn-primary" onClick={() => navigate('/memory-test')}>
          Start Memory Test
        </button>
        <button className="btn btn-secondary">View Medication Schedule</button>
        <button className="btn btn-warning">Emergency Call</button>
        <button className="btn btn-alert" onClick={() => navigate('/memory-test')}>
          View Analytics
        </button>
      </div>
      <footer className="home-footer">💙 Caring for those who cared for us</footer>
    </div>
  )
}

export default Dashboard
