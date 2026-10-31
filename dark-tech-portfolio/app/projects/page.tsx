import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {projects} from '@/data/site';
import {ProjectCard} from '@/components/project-card';
export const metadata:Metadata={title:'Projects'};
export default function Projects(){return <main className="container page-wrap"><Link className="back-link" href="/"><ArrowLeft size={17}/> Back to home</Link><div className="page-eyebrow">ENGINEERING / SELECTED CASE STUDIES</div><h1 className="page-title">Project <span className="gradient-text">archive.</span></h1><p className="section-description intro">A selection of industrial monitoring, tracking, automation, and computer vision work. Descriptions distinguish prototypes from deployed workflows.</p><div className="projects-grid">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></main>}
