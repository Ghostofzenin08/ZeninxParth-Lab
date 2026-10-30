import React from 'react';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';
import { projectsData } from '../../data/projectsData';

export default function SnipyPage() {
  const project = projectsData.find((p) => p.id === 'snipy');
  return <CaseStudyLayout project={project} />;
}
