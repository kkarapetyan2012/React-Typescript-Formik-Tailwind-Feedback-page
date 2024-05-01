import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from './components/Loading';
import './App.css';

const Header = React.lazy(() => import('./components/Header'));
const FeedbackPage = React.lazy(() => import('./components/FeedbackPage'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Header />
        <FeedbackPage  />
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
