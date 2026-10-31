import { Activity, BrainCircuit, ClipboardCheck, RadioTower } from 'lucide-react';
import type { Project } from '@/data/site';

export function ProjectIcon({type,size=22}:{type:Project['icon'];size?:number}) {
  const common={size,strokeWidth:1.8};
  if(type==='activity')return <Activity {...common}/>;
  if(type==='radio')return <RadioTower {...common}/>;
  if(type==='brain')return <BrainCircuit {...common}/>;
  return <ClipboardCheck {...common}/>;
}
export function MonitorVisual(){
 return <div className="monitor-visual" aria-label="Illustrative industrial metrics dashboard">
   <div className="monitor-top"><span><i className="live-dot"/> LIVE PRODUCTION FEED</span><span>EDGE / 01</span></div>
   <div className="monitor-metrics"><div><small>Availability</small><strong>94.2<span>%</span></strong><em>DEMO DATA</em></div><div><small>Performance</small><strong>88.7<span>%</span></strong><em>DEMO DATA</em></div><div><small>Quality</small><strong>98.6<span>%</span></strong><em>DEMO DATA</em></div></div>
   <div className="chart-area"><div className="chart-header"><span>Production activity</span><span>08:00 — 16:15</span></div><svg viewBox="0 0 520 115" preserveAspectRatio="none" role="img" aria-label="Illustrative activity chart"><defs><linearGradient id="paint" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#51a9ff" stopOpacity=".3"/><stop offset="1" stopColor="#51a9ff" stopOpacity="0"/></linearGradient></defs><path d="M0 77 L45 65 L80 71 L120 36 L165 43 L205 57 L244 19 L280 44 L320 30 L358 51 L392 21 L433 33 L472 16 L520 24 L520 115 L0 115Z" fill="url(#paint)"/><path d="M0 77 L45 65 L80 71 L120 36 L165 43 L205 57 L244 19 L280 44 L320 30 L358 51 L392 21 L433 33 L472 16 L520 24" stroke="#68bdff" strokeWidth="2.5" fill="none"/></svg></div>
   <div className="monitor-bottom"><span><i className="blue-dot"/> Sensor signals</span><span>MQTT CONNECTED</span></div>
 </div>
}
