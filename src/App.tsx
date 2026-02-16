import { Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import MentionsLegales from './pages/mentions-legales';
import PolitiqueConfidentialite from './pages/politique-confidentialite';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
    </Routes>
  );
};

export default App;