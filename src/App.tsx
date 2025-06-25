import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
