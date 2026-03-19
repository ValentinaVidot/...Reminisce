import { useNavigate } from 'react-router-dom'

function Home({ logo }) {
  const navigate = useNavigate()

  return (
    <div className="screen home-screen">
      <p className="eyebrow">Care Platform</p>
      <h1>...Reminisce</h1>
      <img className="center-logo" src={logo} alt="Reminisce center logo" />
      <p className="lead">
        Helping caregivers monitor dementia patients&apos; memory and safety.
      </p>
      <p className="platform-summary">
        ...Reminisce is a care platform designed to support individuals diagnosed
        with dementia and their caregivers. It provides regular cognitive memory
        tests to track mental health over time, sends medication reminders,
        monitors daily well-being, and enables quick access to emergency
        contacts. All in one place.
      </p>
      <div className="action-stack home-actions">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/registration')}
        >
          Register Patient
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/login')}>
          Login
        </button>
      </div>
      <footer className="home-footer">💙 Caring for those who cared for us</footer>
    </div>
  )
}

export default Home
