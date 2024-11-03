
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoppingListDetailPage from './ShoppingListDetailPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="*" element={<ShoppingListDetailPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
