import React from 'react';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';
import { projectsData } from '../../data/projectsData';

export default function ResumatchPage() {
  const project = projectsData.find((p) => p.id === 'resumatch');
  return <CaseStudyLayout project={project} />;
}
