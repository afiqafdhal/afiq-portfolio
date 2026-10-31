'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '@/data/site';
export function Header(){
 const [open,setOpen]=useState(false);
 const nav=[{href:'/#about',label:'About'},{href:'/projects',label:'Projects'},{href:'/#expertise',label:'Expertise'},{href:'/#experience',label:'Experience'}];
 return <header className="site-header"><div className="container nav-shell"><Link href="/" className="brand" onClick={()=>setOpen(false)}>{profile.initials}<span className="brand-divider"/> <span className="brand-sub">MECHATRONICS ENGINEERING</span></Link><nav aria-label="Main navigation" className={open?'nav-links open':'nav-links'}>{nav.map(n=><Link key={n.href} href={n.href} onClick={()=>setOpen(false)}>{n.label}</Link>)}<Link href="/#contact" className="nav-contact" onClick={()=>setOpen(false)}>Get in touch <ArrowUpRight size={15}/></Link></nav><button className="menu-button" onClick={()=>setOpen(!open)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>{open?<X/>:<Menu/>}</button></div></header>
}
