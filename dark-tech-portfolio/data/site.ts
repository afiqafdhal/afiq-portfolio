export const profile = {
  name: 'Afiq Afdhal',
  shortName: 'Afiq',
  initials: 'AA',
  role: 'Digital Transformation Intern',
  positioning: 'Mechatronics Engineering Student | Automation · IoT · Industry 4.0',
  resumeAvailable: false,
  education: 'Universiti Teknologi MARA (UiTM)',
  headline: 'I build practical solutions where engineering meets technology.',
  description: 'Mechatronics Engineering student with hands-on exposure to manufacturing digitalisation, automation, programming, and IoT. Interested in building practical engineering systems, from sensor-based automation to connected industrial applications.',
  location: 'Kuala Lumpur, Malaysia',
  email: 'afiqafdhal247@gmail.com',
  phone: '018-4024703',
  github: '',
  linkedin: '', // Add the public profile URL when verified.
  resume: '/resume.pdf',
};

export type Project = {
  slug: string; title: string; category: string; year: string; summary: string;
  tags: string[]; icon: 'activity' | 'radio' | 'brain' | 'clipboard'; status: string; role: string;
  context: string; contribution: string[]; architecture: string[]; outcome: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug:'rgb-color-sorting',title:'AI RGB Sensor-Based Color Sorting System',category:'FINAL YEAR PROJECT',year:'FYP',status:'Academic project — details to verify',role:'Mechatronics engineering / system development',
    summary:'A color-sorting engineering project using an AI RGB color sensor to distinguish objects by their measured color and support automated sorting decisions.',
    tags:['RGB Color Sensor','Color Classification','Automation','Mechatronics','Sensor Integration'],icon:'brain',
    context:'Manual color sorting can be inconsistent and time-consuming. A sensor-based system can measure object color and use predefined rules to decide a sorting category.',
    contribution:['Explored RGB color sensing for object identification.','Developed the color detection and sorting-system concept as a final-year project.','Considered how sensor measurements can drive an automated sorting mechanism.'],
    architecture:['Object at sensing point','RGB color sensor','Controller / decision logic','Sorting actuator (confirm hardware)','Output category'],
    outcome:'RGB sensor detection is the confirmed project focus. Hardware selection, sorting mechanism, measured performance, and any machine-learning functionality should be verified before publishing.',
    note:'An RGB sensor with threshold-based classification is not automatically an AI model. Update the title and case study only if machine-learning methods were actually implemented.'
  },
  {
    slug:'manufacturing-digital-transformation',title:'Manufacturing Digital Transformation Exposure',category:'INTERNSHIP EXPERIENCE',year:'2026',status:'Industrial training / ongoing',role:'Digital Transformation Intern',
    summary:'Learning and supporting digitalisation initiatives in a manufacturing environment, with exposure to industrial automation, programming, networking and IoT.',
    tags:['Manufacturing','IoT','Python','Node-RED','JavaScript'],icon:'activity',
    context:'Factory operations increasingly rely on connected devices and digital workflows to improve visibility and support production teams.',
    contribution:['Gained exposure to manufacturing digitalisation initiatives.','Learned about automation, programming, networking, electronics and IoT applications.','Focused technical learning on Python, Node-RED, JavaScript and basic electronics.'],
    architecture:['Manufacturing environment','Sensors / digital systems','Connectivity and applications','Operations and reporting'],
    outcome:'Practical exposure through industrial training at Sugihara Grand Industries Sdn. Bhd.; specific deliverables should be added only after verification and company approval.',
    note:'Company-owned work, screenshots and internal data should only be included with permission.'
  }
];

export const skills = [
  {title:'Mechatronics & Automation',items:['AI RGB Color Sensors','Automation Concepts','Electronics','Sensor Integration','System Testing']},
  {title:'Programming & Applications',items:['Python','JavaScript','Node-RED','Programming Fundamentals']},
  {title:'IoT & Digitalisation',items:['Industrial IoT','Networking Fundamentals','Manufacturing Digitalisation','Industry 4.0']},
  {title:'Engineering Approach',items:['Problem Solving','Prototyping','System Integration','Technical Documentation']},
];
