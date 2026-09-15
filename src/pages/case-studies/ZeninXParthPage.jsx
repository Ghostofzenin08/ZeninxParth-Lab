import React from 'react';
import CaseStudyLayout from '../../components/layout/CaseStudyLayout';
import { projectsData } from '../../data/projectsData';

export default function ZeninXParthPage() {
  const project = projectsData.find((p) => p.id === 'zenin-x-parth');
  return <CaseStudyLayout project={project} />;
}
