import React from 'react';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';
import { projectsData } from '../../data/projectsData';

export default function MeteorDodgePage() {
  const project = projectsData.find((p) => p.id === 'meteor-space-dodge');
  return <CaseStudyLayout project={project} />;
}
