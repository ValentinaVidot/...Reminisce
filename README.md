# ...Reminisce — Care Platform

> 💙 Caring for those who cared for us

**...Reminisce** is a web-based care platform designed to support individuals diagnosed with dementia and their caregivers. It provides regular cognitive memory tests to track mental health over time, sends medication reminders, monitors daily well-being, and enables quick access to emergency contacts — all in one place.

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Landing screen with platform summary. Entry point to Register or Login. |
| `/login` | **Login** | Sign-in screen for existing caregivers/staff. |
| `/registration` | **Registration** | Form to register a new patient (name, age, medical details). |
| `/emergency-contact` | **Emergency Contact** | Form to record the patient's emergency contact details. |
| `/dashboard` | **Dashboard** | Main hub showing medication reminders, memory scores, alerts, and quick-action buttons. |
| `/memory-test` | **Memory Test** | Chatbot-style interface where the AI assistant "Mira" runs a cognitive memory assessment. Supports typed or voice responses. |
| `/voice-response` | **Voice Response** | Full-screen speech recognition page. Tap the microphone, speak an answer, and the text transcript is captured and returned to the memory test. |

---

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — build tool and dev server
- **React Router v7** — client-side routing
- **Web Speech API** — browser-native speech recognition on the Voice Response page (supported in Chrome and Edge)

---

## Project Structure

```
...Reminisce/
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx          # App entry point — wraps app in BrowserRouter
        ├── App.jsx           # Route definitions and global nav shell
        ├── App.css           # All application styles
        └── pages/
            ├── Home.jsx
            ├── Login.jsx
            ├── Registration.jsx
            ├── EmergencyContact.jsx
            ├── Dashboard.jsx
            ├── MemoryTest.jsx
            └── VoiceResponse.jsx
```

---

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/ValentinaVidot/...Reminisce.git
cd "...Reminisce"

# 2. Install dependencies
cd frontend
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** (or the next available port, e.g. 5174).

### Production Build

```bash
cd frontend
npm run build
```

Output is placed in `frontend/dist/`.

---

## Navigation Flow

```
Home
 ├── Register Patient → Registration → Emergency Contact → Dashboard
 └── Login                                               → Dashboard
                                                              └── Memory Test → Voice Response
```

---

## Notes

- The **Voice Response** page uses the browser's built-in `SpeechRecognition` API. This is only supported in **Chrome** and **Edge** — it will show an alert in unsupported browsers (e.g. Firefox, Safari).
- All data is currently front-end only (no backend). Forms are UI prototypes.
