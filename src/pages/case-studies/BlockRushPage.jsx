import React from 'react';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';
import { projectsData } from '../../data/projectsData';

export default function BlockRushPage() {
  const project = projectsData.find((p) => p.id === 'blockrush-2048');
  return <CaseStudyLayout project={project} />;
}
