import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider, SurveyProvider } from './Utils/context'
import './index.css'

// Composants
import GlobalStyle from './styles/GlobalStyle'
import Home from './pages/Home'
import Survey from '../src/pages/Survey/survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from '../src/components/Header/'
import Error from './components/Error'
import Footer from './components/Footer'
import Profile from './pages/Profile'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
)
