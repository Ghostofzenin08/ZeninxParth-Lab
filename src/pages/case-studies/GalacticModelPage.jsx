import React from 'react';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';
import GalacticOrbitSimulator from '../../components/ui/GalacticOrbitSimulator';
import { projectsData } from '../../data/projectsData';

export default function GalacticModelPage() {
  const project = projectsData.find((p) => p.id === '3d-galactic-model');

  return (
    <div>
      <CaseStudyLayout project={project} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-16">
        <GalacticOrbitSimulator />
      </div>
    </div>
  );
}
