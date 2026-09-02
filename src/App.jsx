import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './Component/Layout'
import Herosection from './Component/Herosection'
import TrustBar from './Component/TrustBar'
import Howitsworks from './Component/Howitsworks'
import Services from './Component/Services'
import Testimonials from './Component/Testimonials'
import CTABanner from './Component/CTABanner'
import Login from './Component/Login';

function LandingPage() {
  return (
    <>
      <Herosection/>
      <TrustBar/>
      <Howitsworks/>
      <Services/>
      <Testimonials/>
      <CTABanner/>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App