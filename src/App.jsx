import { Suspense, lazy } from 'react'
import './App.css'

import Page404 from './pages/404'
import { Router } from './Router'
import SearchPage from './pages/Search'
import { Route } from './Route'

const AboutPage = lazy(() => import('./pages/About'))
const HomePage = lazy(() => import('./pages/Home'))

const appRoutes = [
  { 
     path: '/search/:query', 
    Component: SearchPage
  }
]

function App() {

  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
