import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import Movie from './pages/Movie/Movie'
import Search from './pages/Search/Search';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path='search' element={<Search/>}/>
      <Route path="/movie/:id" element={<Movie/>}/>
      <Route />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
)
