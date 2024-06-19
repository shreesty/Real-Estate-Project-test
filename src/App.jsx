import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import LoginButton from './login_button';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const url = new URL(window.location.href)
    if (url.searchParams.has('show')) {
      setShowModal(true)
    } else {
      setShowModal(false)
    }
  }, [])

  const openModal = () => {
    const url = new URL(window.location.href)
    url.searchParams.set('show', 'login')
    window.history.pushState({}, '', url)
    setShowModal(true)
  }

  const closeModal = () => {
    const url = new URL(window.location.href)
    url.searchParams.delete('show')
    window.history.pushState({}, '', url)
    setShowModal(false)
  }

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Please enter both email and password.')
      return
    }
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    // Password validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }
    // Check against the hardcoded credentials
    if (email === 'shristi35dahal@gmail.com' && password === 'Shristi35@') {
      // Clear error if validation passes
      setError('')
      // Simulate successful login and redirect to profile page
      closeModal()
      window.location.href = '/profile' // Adjust the profile page URL as needed
    } else {
      setError('Invalid email or password.')
    }
  }

  return (
    <>
      <nav>
        <i><h6 className="title">HomeHive Ventures</h6></i>
        <ul>
          <li><a className="text-decoration-none" href="#Home">Home</a></li>
          <li><a className="text-decoration-none" href="#About">About</a></li>
          <li><a className="text-decoration-none" href="#Services">Services</a></li>
          <li><a className="text-decoration-none" href="#Projects">Projects</a></li>
          <li><a className="text-decoration-none" href="#Shop">Shop</a></li>
          <li><a className="text-decoration-none" href="#Contact">Contact</a></li>
        </ul>
        <button className="login_btn" onClick={openModal}>Login</button>
      </nav>

      <main>
        <div className="Container">
          <div className="container1"></div>
          <div className="container2">
            <h2 className='welcome_text'>WELCOME TO HOMEHIVE VENTURES!</h2>
            <p id="description">
              Nestled in the heart of Kathmandu, Nepal, HOMEHIVE VENTURES stands as a beacon of innovation and excellence in the real estate industry.
            </p>
            <p id="description">
              Our company is dedicated to transforming the real estate landscape of Nepal, blending modern design principles with the rich cultural heritage of our region.
            </p>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Login</h2>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
