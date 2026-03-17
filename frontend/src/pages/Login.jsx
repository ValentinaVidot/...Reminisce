import { useNavigate } from 'react-router-dom'

function Login({ logo }) {
  const navigate = useNavigate()

  return (
    <div className="screen home-screen">
      <p className="eyebrow">Care Platform</p>
      <h1>Login</h1>
      <img className="center-logo" src={logo} alt="Reminisce center logo" />
      <p className="lead">Welcome back. Sign in to continue care monitoring.</p>

      <div className="field-grid">
        <label>
          Email
          <input type="email" placeholder="caregiver@example.com" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Enter password" />
        </label>
      </div>

      <div className="action-stack home-actions">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/dashboard')}
        >
          Log In
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>

      <footer className="home-footer">💙 Caring for those who cared for us</footer>
    </div>
  )
}

export default Login
