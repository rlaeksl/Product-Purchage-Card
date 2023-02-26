import React from 'react';
import './style.css';
import ProductPage from './components/ProductPage';
import ToolTip from './components/ToolTip';

export default function App() {
  return (
    <div className="viewport">
      <ProductPage />
      <ToolTip />
    </div>
  );
}
