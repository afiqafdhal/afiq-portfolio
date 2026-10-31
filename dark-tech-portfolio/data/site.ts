
export const profile = {
  name: "Afiq Afdhal",
  shortName: "Afiq",
  initials: "AA",
  role: "Digital Transformation Intern",
  positioning:
    "Mechatronics Engineering Student | Automation · IoT · Industry 4.0",
  resumeAvailable: false,
  education: "Universiti Teknologi MARA (UiTM)",
  headline:
    "I build practical solutions where engineering meets technology.",
  description:
    "Mechatronics Engineering student with hands-on exposure to manufacturing digitalisation, automation, programming, IoT, and artificial intelligence. Interested in developing practical engineering systems, from AI-powered computer vision to connected industrial applications.",
  location: "Kuala Lumpur, Malaysia",
  email: "afiqafdhal247@gmail.com",
  phone: "018-4024703",
  github: "",
  linkedin: "",
  resume: "/resume.pdf",
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  icon: "activity" | "radio" | "brain" | "clipboard";
  status: string;
  role: string;
  context: string;
  contribution: string[];
  architecture: string[];
  outcome: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "rgb-color-sorting",

    title:
      "AI-Based Fruit Ripeness Detection and Automated Sorting System",

    category: "FINAL YEAR PROJECT",

    year: "FYP 2",

    status:
      "Prototype Development — Real-Time AI Detection Implemented",

    role:
      "AI Model Development, Raspberry Pi Integration and System Prototyping",

    summary:
      "An intelligent fruit ripeness detection and automated sorting prototype developed using YOLOv8n deep learning and Raspberry Pi 4. The system uses computer vision to identify fruit ripeness conditions and classify detected fruit into three categories: Unripe, Ripe, and Overripe. The project explores edge AI, real-time image processing, and automated sorting to support more consistent fruit quality classification.",

    tags: [
      "YOLOv8n",
      "Computer Vision",
      "Artificial Intelligence",
      "Deep Learning",
      "Python",
      "Raspberry Pi 4",
      "OpenCV",
      "ONNX Runtime",
      "Image Processing",
      "Automated Sorting",
    ],

    icon: "brain",

    context:
      "Fruit ripeness identification is traditionally performed through manual visual inspection, which can be time-consuming and affected by differences in human judgment. This project investigates an intelligent classification approach using machine learning and computer vision to identify ripeness levels. The main engineering challenge is integrating an AI detection model with an embedded processing platform while preparing the system for an automated sorting mechanism.",

    contribution: [
      "Developed and tested a YOLOv8n object detection model for fruit ripeness classification.",

      "Organized and evaluated fruit image datasets containing different ripeness conditions.",

      "Implemented three-class classification: Unripe, Ripe, and Overripe.",

      "Tested model predictions using fruit images, including banana, apple, and mango samples.",

      "Exported the trained YOLOv8 model to ONNX format for deployment on Raspberry Pi 4.",

      "Integrated ONNX Runtime and OpenCV for image processing and AI inference.",

      "Configured camera capture for real-time fruit detection on Raspberry Pi.",

      "Developed a Python and Flask-based live detection interface.",

      "Implemented prediction stabilization logic to reduce repeated fruit counting and inconsistent classifications.",

      "Displayed detected ripeness categories, prediction results, and fruit counters through a live monitoring interface.",

      "Explored integration of the AI detection system with a future servo motor-based automated sorting mechanism.",
    ],

    architecture: [
      "Fruit positioned in camera view",

      "Camera image acquisition",

      "Raspberry Pi 4 edge computing platform",

      "OpenCV image preprocessing",

      "YOLOv8n object detection model",

      "ONNX Runtime inference",

      "Ripeness classification: Unripe / Ripe / Overripe",

      "Prediction stabilization and fruit counting",

      "Python / Flask monitoring interface",

      "Automated sorting mechanism (planned integration)",
    ],

    outcome:
      "The prototype has demonstrated fruit ripeness classification using a trained YOLOv8n model. Initial image tests produced confidence scores of approximately 86% for a ripe banana, 71% for an unripe apple, and 61% for an overripe mango. The model was exported to ONNX and tested on Raspberry Pi 4 using camera-based inference. Live detection, ripeness counters, and prediction stabilization were implemented. These confidence scores represent individual predictions rather than overall model accuracy. Full physical sorting integration and end-to-end system validation remain future development activities.",

    note:
      "Current development focuses on AI detection, Raspberry Pi deployment, camera integration, and prototype testing. Planned improvements include additional dataset collection, model evaluation, physical sorting integration, and testing of sorting reliability. Final system performance should be confirmed through controlled testing.",
  },

  {
    slug: "manufacturing-digital-transformation",

    title: "Manufacturing Digital Transformation Exposure",

    category: "INTERNSHIP EXPERIENCE",

    year: "2026",

    status: "Industrial Training / Ongoing",

    role: "Digital Transformation Intern",

    summary:
      "Learning and supporting digitalisation initiatives in a manufacturing environment, with exposure to industrial automation, programming, networking, IoT, and connected monitoring applications.",

    tags: [
      "Manufacturing",
      "Industrial IoT",
      "Python",
      "Node-RED",
      "JavaScript",
      "Raspberry Pi",
      "Industry 4.0",
    ],

    icon: "activity",

    context:
      "Modern manufacturing environments increasingly rely on digital monitoring, connected devices, and automated workflows to improve operational visibility and support engineering and production teams.",

    contribution: [
      "Gained practical exposure to manufacturing digitalisation initiatives.",

      "Learned about the application of Raspberry Pi, sensors, networking, and IoT in industrial environments.",

      "Explored the use of Python and Node-RED for automation and data integration.",

      "Developed understanding of real-time production monitoring and connected industrial systems.",

      "Learned about technical troubleshooting, system integration, and practical engineering workflows.",

      "Strengthened programming and electronics knowledge through industrial training activities.",
    ],

    architecture: [
      "Manufacturing equipment and processes",

      "Sensors and industrial devices",

      "Raspberry Pi / edge computing",

      "Python and Node-RED applications",

      "Network communication",

      "Digital monitoring and reporting",
    ],

    outcome:
      "Practical industrial training experience at Sugihara Grand Industries Sdn. Bhd., with exposure to manufacturing technology, industrial IoT, automation, programming, and digital transformation concepts.",

    note:
      "Company-owned projects, screenshots, production information, and internal technical details should only be published with appropriate permission.",
  },
];

export const skills = [
  {
    title: "Mechatronics & Automation",

    items: [
      "Automation Fundamentals",
      "Sensor Integration",
      "Electronics",
      "Embedded Systems",
      "Raspberry Pi",
      "System Prototyping",
      "System Testing",
    ],
  },

  {
    title: "Programming & AI",

    items: [
      "Python",
      "JavaScript",
      "YOLOv8n",
      "Computer Vision",
      "OpenCV",
      "ONNX Runtime",
      "Flask",
      "Machine Learning Fundamentals",
    ],
  },

  {
    title: "IoT & Digitalisation",

    items: [
      "Industrial IoT",
      "Node-RED",
      "MQTT Fundamentals",
      "Networking Fundamentals",
      "Manufacturing Digitalisation",
      "Edge Computing",
      "Industry 4.0",
    ],
  },

  {
    title: "Engineering Approach",

    items: [
      "Problem Solving",
      "Technical Troubleshooting",
      "Prototyping",
      "System Integration",
      "Model Testing",
      "Technical Documentation",
    ],
  },
];
