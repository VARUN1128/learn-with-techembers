import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LearningPaths from './pages/LearningPaths';
import ProjectsLibrary from './pages/ProjectsLibrary';
import ProjectDetail from './pages/ProjectDetail';
import SensorExplorer from './pages/SensorExplorer';
import Glossary from './pages/Glossary';
import SubmitProject from './pages/SubmitProject';
import LearningPathDetail from './pages/LearningPathDetail';
import About from './pages/About';
import AnimatedBackground from './components/AnimatedBackground';
import CursorTrail from './components/CursorTrail';
import Header from './components/Header';
import WhatsAppFloat from './components/WhatsAppFloat';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <CursorTrail />
        <Header />
        <WhatsAppFloat />
        <div className="pt-16">
          <Home />
        </div>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <CursorTrail />
        <Header />
        <WhatsAppFloat />
        <div className="pt-16">
          <About />
        </div>
      </div>
    ),
  },
  {
    path: "/learning",
    element: (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <CursorTrail />
        <Header />
        <WhatsAppFloat />
        <div className="pt-16">
          <LearningPaths />
        </div>
      </div>
    ),
  },
  {
    path: "/learning/:id",
    element: (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <CursorTrail />
        <Header />
        <WhatsAppFloat />
        <div className="pt-16">
          <LearningPathDetail />
        </div>
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <CursorTrail />
        <Header />
        <WhatsAppFloat />
        <div className="pt-16">
          <ProjectsLibrary />
        </div>
      </div>
    ),
  },
  {
    path: "/projects/:id",
    element: (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <CursorTrail />
        <Header />
        <WhatsAppFloat />
        <div className="pt-16">
          <ProjectDetail />
        </div>
      </div>
    ),
  },
  {
    path: "/sensors",
    element: (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <CursorTrail />
        <Header />
        <WhatsAppFloat />
        <div className="pt-16">
          <SensorExplorer />
        </div>
      </div>
    ),
  },
  {
    path: "/glossary",
    element: (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <CursorTrail />
        <Header />
        <WhatsAppFloat />
        <div className="pt-16">
          <Glossary />
        </div>
      </div>
    ),
  },
  {
    path: "/submit",
    element: (
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <CursorTrail />
        <Header />
        <WhatsAppFloat />
        <div className="pt-16">
          <SubmitProject />
        </div>
      </div>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
