import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import EchoOfDreadPage from './pages/case-studies/EchoOfDreadPage';
import BlockRushPage from './pages/case-studies/BlockRushPage';
import MeteorDodgePage from './pages/case-studies/MeteorDodgePage';
import ZeninXParthPage from './pages/case-studies/ZeninXParthPage';
import ResumatchPage from './pages/case-studies/ResumatchPage';
import EnhancedPongPage from './pages/case-studies/EnhancedPongPage';
import PythonGamesPage from './pages/case-studies/PythonGamesPage';
import GalacticModelPage from './pages/case-studies/GalacticModelPage';
import SnipyPage from './pages/case-studies/SnipyPage';
import ModernAuthPage from './pages/case-studies/ModernAuthPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* Featured Projects & Case Studies */}
        <Route path="/projects/resumatch" element={<ResumatchPage />} />
        <Route path="/projects/echo-of-dread" element={<EchoOfDreadPage />} />
        <Route path="/projects/3d-galactic-model" element={<GalacticModelPage />} />
        <Route path="/projects/meteor-space-dodge" element={<MeteorDodgePage />} />
        <Route path="/projects/blockrush-2048" element={<BlockRushPage />} />
        <Route path="/projects/snipy" element={<SnipyPage />} />
        <Route path="/projects/game-development-hub" element={<PythonGamesPage />} />
        <Route path="/projects/modern-auth-ui" element={<ModernAuthPage />} />

        {/* Legacy & Secondary Routes */}
        <Route path="/projects/zenin-x-parth" element={<ZeninXParthPage />} />
        <Route path="/projects/enhanced-pong" element={<EnhancedPongPage />} />
        <Route path="/projects/python-games" element={<PythonGamesPage />} />

        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
