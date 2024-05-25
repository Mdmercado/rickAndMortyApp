import { lazy, Suspense } from 'react'
import { Route, Switch } from 'wouter'
import Layout from './components/Layout'
import Loader from './components/Loader'
import NotFound from './components/NotFound'

const Characters = lazy(() => import('./components/Characters/Characters'))
const Locations = lazy(() => import('./components/Locations/index.tsx'))

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Suspense fallback={<Loader />}>
            <Characters />
          </Suspense>
        </Route>
        <Route path="/locaciones">
          <Suspense fallback={<Loader />}>
            <Locations />
          </Suspense>
        </Route>
        // Add notFound route
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
