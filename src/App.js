import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Pages/Layout/Layout';
import HomePage from './components/Pages/HomePage/HomePage';
import AuctionRoom from './components/Pages/AuctionRoom/AuctionRoom';
import NotFound from './components/Pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='auction' element={<AuctionRoom />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
