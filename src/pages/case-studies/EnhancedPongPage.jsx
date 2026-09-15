import React from 'react';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';
import { projectsData } from '../../data/projectsData';

export default function EnhancedPongPage() {
  const project = projectsData.find((p) => p.id === 'enhanced-pong');
  return <CaseStudyLayout project={project} />;
}
