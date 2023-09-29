import './App.css';
import Aboutc from './components/About/About';
import Contactc from './components/Contact/Contact';
import Index from './components/Index/Index';
import Layout from "./components/Layout/Layout"
import { Routes, Route , Navigate   } from "react-router-dom"
import Singlec from './components/Singlec/Singlec';
import Introductionc from './components/Introductionc/Introductionc'
import Podcast from './components/Podcast/Podcastc'
import { useEffect } from 'react';

function RedirectComponent() {
  useEffect(() => {
    window.location.href = "https://panel.rahvin.ir/admin/login";
  }, []);

  return null;
}

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path='/' element={<Index />} />
          <Route path='/About' element={<Aboutc />} />
          <Route path='/Contact' element={<Contactc />} />
          <Route path='/Single/:slug' element={<Singlec />} /> 
          <Route path='/Category/:slug' element={<Introductionc />} />
          <Route path='/Podcast' element={<Podcast />} />
          <Route path='/admin' element={<RedirectComponent />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
