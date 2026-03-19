import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function VoiceResponse() {
  const navigate = useNavigate()
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [status, setStatus] = useState('idle') // idle | recording | done
  const recognitionRef = useRef(null)

  const startRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Try Chrome or Edge.')
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognitionRef.current = recognition

    recognition.onstart = () => {
      setIsRecording(true)
      setStatus('recording')
      setTranscript('')
    }

    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript
      setTranscript(text)
      setStatus('done')
    }

    recognition.onerror = () => {
      setIsRecording(false)
      setStatus('idle')
    }

    recognition.onend = () => {
      setIsRecording(false)
    }

    recognition.start()
  }

  const reset = () => {
    setTranscript('')
    setStatus('idle')
    setIsRecording(false)
  }

  const labelText = isRecording
    ? 'Listening…'
    : status === 'done'
    ? 'Recorded!'
    : 'Tap to Record'

  return (
    <div className="screen voice-response-screen">
      <button className="back-button" onClick={() => navigate('/memory-test')}>
        ← Back
      </button>

      <p className="eyebrow page-eyebrow">Care Platform</p>
      <h2>Voice Response</h2>

      <p className="vr-subtitle">
        Tap the microphone button and speak your answer clearly.
        <br />
        Your voice will be recorded and converted to text.
      </p>

      <div className={`mic-container${isRecording ? ' recording' : ''}`}>
        {isRecording && (
          <div className="mic-waves" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        )}
        <button
          className="mic-btn"
          onClick={startRecording}
          disabled={isRecording}
          aria-label={labelText}
        >
          🎙️
        </button>
      </div>

      <p className="mic-label">{labelText}</p>

      {transcript && (
        <div className="transcript-box">
          <p className="transcript-label">You said:</p>
          <p className="transcript-text">&ldquo;{transcript}&rdquo;</p>
        </div>
      )}

      {status === 'done' && (
        <div className="action-stack vr-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate('/memory-test')}
          >
            Submit Answer
          </button>
          <button className="btn btn-secondary" onClick={reset}>
            Record Again
          </button>
        </div>
      )}

      <footer className="home-footer">💙 Caring for those who cared for us</footer>
    </div>
  )
}

export default VoiceResponse
