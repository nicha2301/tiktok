import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layout/'
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout === null? Fragment : (route.layout || DefaultLayout);
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>}>
              </Route>
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
