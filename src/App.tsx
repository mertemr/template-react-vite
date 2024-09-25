import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Pages
import Layout from './layouts/Layout'

import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
// ===

const App = () => {
  return (
    <HelmetProvider context={{}}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
