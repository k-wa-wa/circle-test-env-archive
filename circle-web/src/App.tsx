import { Component, lazy } from 'solid-js';
import { Route, Router, Routes, Link } from '@solidjs/router';

import { loginAction } from './application/auth';

const Index = lazy(() => import ("./pages/index"));
const About = lazy(() => import ("./pages/about"));
const Mypage = lazy(() => import ("./pages/mypage"));


const App: Component = () => {
  return (
    <Router>
    welcome
    <nav>
      <Link href="/about">About</Link>
      <Link href="/">Home</Link>
      <Link href="/mypage">Mypage</Link>
    </nav>
    <button onClick={() => loginAction()}>Login</button>
    <Routes>
      <Route path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/mypage" component={Mypage} />
    </Routes>
  </Router>
  );
};

export default App;
