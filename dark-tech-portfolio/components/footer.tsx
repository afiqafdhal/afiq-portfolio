import Link from 'next/link';
import { profile } from '@/data/site';
export function Footer(){return <footer className="footer"><div className="container footer-inner"><Link href="/" className="footer-brand">{profile.initials}</Link><span>Built with intention. Engineered for impact.</span><span>© {new Date().getFullYear()} {profile.shortName}</span></div></footer>}
