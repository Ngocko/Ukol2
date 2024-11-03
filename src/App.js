// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingListDetailPage from './ShoppingListDetailPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/list" element={<ShoppingListDetailPage/>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
