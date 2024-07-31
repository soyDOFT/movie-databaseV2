import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Search from './pages/Search'
import PageNotFound from './pages/PageNotFound'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Search/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}