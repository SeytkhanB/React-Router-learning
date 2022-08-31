
import './App.css';
import {Routes, Route} from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'

import Profile from './pages/Profile'
import Info from './pages/profile/Info'
import Settings from './pages/profile/Settings'

import ServicesList from './pages/services/ServicesList'
import ServiceDetail from './pages/services/ServiceDetail'


function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/profile/info'  element={<Info />} />
        <Route path='/profile/settings'  element={<Settings />} />

        
        <Route path='/services'  element={<ServicesList />} />
        <Route path='/services/:serviceId'  element={<ServiceDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App