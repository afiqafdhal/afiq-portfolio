
export const profile = {
  name: "Afiq Afdhal",
  shortName: "Afiq",
  initials: "AA",
  role: "Digital Transformation Unit",
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
  linkedin: "https://www.linkedin.com/in/afiq-afdhal-1318081b6/",
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
    title: "AI-Based Fruit Ripeness Detection and Automated Sorting System",
    category: "FINAL YEAR PROJECT",
    year: "FYP 2",
    status: "Prototype Development — Real-Time AI Detection Implemented",
    role: "AI Model Development, Raspberry Pi Integration and System Prototyping",

    summary:
      "An intelligent fruit ripeness detection and automated sorting prototype using YOLOv8n deep learning and Raspberry Pi 4. The system uses computer vision to classify fruit into Unripe, Ripe and Overripe categories, with future integration of a physical sorting mechanism.",

    tags: [
      "YOLOv8n",
      "Computer Vision",
      "Artificial Intelligence",
      "Deep Learning",
      "Python",
      "Raspberry Pi 4",
      "OpenCV",
      "ONNX Runtime",
      "Automated Sorting",
    ],

    icon: "brain",

    context:
      "Manual fruit ripeness inspection can be time-consuming and affected by differences in human judgment. This project investigates automated classification using deep learning, computer vision and edge computing.",

    contribution: [
      "Developed and tested a YOLOv8n model for fruit ripeness detection.",
      "Evaluated banana, apple and mango samples at different ripeness stages.",
      "Implemented Unripe, Ripe and Overripe classification.",
      "Exported the trained model to ONNX format.",
      "Integrated ONNX Runtime and OpenCV on Raspberry Pi 4.",
      "Configured camera-based real-time detection.",
      "Developed a Python and Flask live detection interface.",
      "Implemented prediction stabilization and fruit counting.",
      "Explored integration with a servo-based automated sorting mechanism.",
    ],

    architecture: [
      "Camera image acquisition",
      "Raspberry Pi 4",
      "OpenCV image preprocessing",
      "YOLOv8n object detection",
      "ONNX Runtime inference",
      "Ripeness classification",
      "Prediction stabilization",
      "Python / Flask monitoring",
      "Physical sorting mechanism (planned)",
    ],

    outcome:
      "The prototype demonstrated fruit ripeness classification using YOLOv8n. Initial image predictions included 86% confidence for a ripe banana, 71% for an unripe apple and 61% for an overripe mango. Camera-based inference, live monitoring and fruit counting were tested on Raspberry Pi 4. Physical automated sorting and full system validation remain future development activities.",

    note:
      "Individual prediction confidence scores are not overall model accuracy. Further dataset evaluation and physical sorting integration are planned.",
  },

  {
    slug: "manufacturing-digital-transformation",

    title: "Manufacturing Digital Transformation",

    category: "INDUSTRIAL INTERNSHIP",

    year: "2026",

    status: "Industrial Training / Ongoing",

    role: "Digital Transformation Unit",

    summary:
      "Hands-on industrial training at Sugihara Grand Industries Sdn. Bhd., focused on manufacturing digitalisation, Industrial IoT, automation and connected monitoring systems. Experience includes learning and working with Raspberry Pi, Python, Node-RED, MQTT, InfluxDB and Grafana for industrial data acquisition, processing and visualisation.",

    tags: [
      "Manufacturing",
      "Industrial IoT",
      "Python",
      "Node-RED",
      "JavaScript",
      "Raspberry Pi",
      "Industry 4.0",
      "Grafana",
      "InfluxDB",
      "MQTT",
      "Automation",
    ],

    icon: "activity",

    context:
      "Manufacturing operations require accurate production information, reliable data collection and accessible monitoring tools. Industrial digitalisation helps improve visibility into machine performance, operational activities and production processes. My internship in the Digital Transformation Unit provided practical exposure to developing and supporting connected monitoring systems in a real manufacturing environment.",

    contribution: [
      "Participated in manufacturing digital transformation and Industrial IoT activities.",

      "Worked with Raspberry Pi as an edge computing platform for industrial monitoring.",

      "Used Python for sensor data collection, device communication and application development.",

      "Explored Node-RED for workflow automation, message processing and dashboard development.",

      "Worked with MQTT concepts for communication between industrial devices and applications.",

      "Gained experience using InfluxDB for storing and querying time-series production and machine monitoring data.",

      "Used Grafana to visualise industrial data through dashboards, charts and performance indicators.",

      "Explored real-time machine monitoring, production tracking and dashboard integration.",

      "Supported troubleshooting and testing involving networking, software services and connected devices.",

      "Developed practical understanding of integrating sensors, edge computing, data storage and visualisation in manufacturing environments.",
    ],

    architecture: [
      "Production machines / industrial processes",
      "Sensors and data acquisition devices",
      "Raspberry Pi edge computing",
      "Python processing applications",
      "MQTT communication",
      "Node-RED workflow processing",
      "InfluxDB time-series database",
      "Grafana monitoring dashboard",
      "Production data visualisation",
    ],

    outcome:
      "Gained hands-on experience with digital transformation technologies in a manufacturing environment, including Raspberry Pi, Python, Node-RED, MQTT, InfluxDB and Grafana. The internship strengthened my understanding of industrial monitoring architecture, hardware-software integration, production data visualisation and technical troubleshooting.",

    note:
      "Internship photographs, dashboards and manufacturing information are shown only where publication is permitted. Internal production data and confidential company information should not be disclosed.",
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
      "MQTT",
      "InfluxDB",
      "Grafana",
      "Raspberry Pi",
      "Networking Fundamentals",
      "Manufacturing Digitalisation",
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
