import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThemeBuilder from './ThemeBuilder'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="theme-builder" element={<ThemeBuilder />} />
      </Routes>
    </BrowserRouter>
	</React.StrictMode>
)