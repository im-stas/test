// File: App.tsx
import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Drug Court Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Main content area - sidebar is working!
        </p>
      </div>
    </div>
  );
}

export default App;