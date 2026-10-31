import type { Metadata } from 'next';
import "./globals.css";
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { profile } from '@/data/site';
export const metadata:Metadata={title:{default:`${profile.name} | Mechatronics Engineering | Automation & IoT`,template:`%s | ${profile.shortName}`},description:profile.description,robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
