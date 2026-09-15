import React from 'react';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';
import { projectsData } from '../../data/projectsData';

export default function PythonGamesPage() {
  const project = projectsData.find((p) => p.id === 'python-games');
  return <CaseStudyLayout project={project} />;
}
