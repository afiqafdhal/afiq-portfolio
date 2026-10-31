import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectIcon } from './visuals';
import type { Project } from '@/data/site';
export function ProjectCard({project,index=0}:{project:Project;index?:number}){
 return <Link href={`/projects/${project.slug}`} className={`project-card project-${project.icon}`}><div className="project-head"><span className="project-category">{project.category}</span><ArrowUpRight size={20}/></div><div className="project-art" aria-hidden="true"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="art-icon"><ProjectIcon type={project.icon} size={42}/></div><span className="art-caption">SYS / 0{index+1}</span></div><div className="project-copy"><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-row">{project.tags.slice(0,3).map(t=><span key={t}>{t}</span>)}</div></div></Link>
}
