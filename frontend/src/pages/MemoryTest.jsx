import { useNavigate } from 'react-router-dom'

function MemoryTest({ logo }) {
  const navigate = useNavigate()
  return (
    <div className="screen">
      <p className="eyebrow page-eyebrow">Care Platform</p>
      <h2>Memory Test</h2>
      <img className="page-logo" src={logo} alt="Reminisce center logo" />
      <div className="chat-window">
        <div className="bubble assistant">
          Hello, I&apos;m Mira. Let&apos;s do a quick memory check.
        </div>
        <div className="bubble assistant">What day is it today?</div>
        <div className="bubble patient">It&apos;s Tuesday.</div>
        <div className="bubble assistant">What city are you in?</div>
        <div className="bubble assistant">
          Remember these words: Apple, Chair, River.
        </div>
      </div>
      <div className="chat-tools">
        <button
          className="chat-mic-btn"
          onClick={() => navigate('/voice-response')}
          aria-label="Voice input"
        >
          🎙️
        </button>
        <input type="text" placeholder="Type your answer..." />
        <button className="chat-send-btn" aria-label="Send answer">
          ➤
        </button>
      </div>
      <footer className="home-footer">💙 Caring for those who cared for us</footer>
    </div>
  )
}

export default MemoryTest
