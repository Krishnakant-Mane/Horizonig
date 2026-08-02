
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<AboutUs/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
