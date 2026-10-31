
export type InternshipWork = {
  slug: string;
  title: string;
  category: string;
  photoIndex: number;
  summary: string;
  tools: string[];
  problem: string;
  solution: string;
  contribution: string[];
  architecture: string[];
  outcome: string;
};

export const internshipWorks: InternshipWork[] = [
  {
    slug: "production-monitoring-dashboard",
    title: "Production Monitoring Dashboard",
    category: "Industrial IoT",
    photoIndex: 0,

    summary:
      "A manufacturing monitoring dashboard that presents production and machine information in a visual format to support operational awareness.",

    tools: [
      "Grafana",
      "InfluxDB",
      "Node-RED",
      "Python",
      "Raspberry Pi",
      "MQTT",
    ],

    problem:
      "Production and machine information can be difficult to interpret when data is spread across separate systems. A visual monitoring dashboard helps teams review operational status and production indicators more efficiently.",

    solution:
      "The monitoring approach uses edge devices and software integrations to collect production information, process it, store time-series records and present the data through dashboard panels.",

    contribution: [
      "Explored production monitoring requirements and dashboard layouts.",
      "Worked with Grafana visualisation and monitoring panels.",
      "Gained experience with InfluxDB time-series data.",
      "Explored Python, MQTT and Node-RED integration.",
      "Supported technical testing and troubleshooting.",
    ],

    architecture: [
      "Production equipment and sensors",
      "Raspberry Pi / edge device",
      "Python and MQTT communication",
      "Node-RED processing",
      "InfluxDB data storage",
      "Grafana dashboard",
    ],

    outcome:
      "Practical experience in manufacturing data visualisation, dashboard integration, monitoring concepts and troubleshooting. Specific production improvements and performance results have not been independently established.",
  },

  {
    slug: "shopfloor-monitoring-display",
    title: "Shopfloor Monitoring Display",
    category: "Visual Management",
    photoIndex: 1,

    summary:
      "A shopfloor display application presenting production information on a screen to improve visibility of manufacturing operations.",

    tools: [
      "Grafana",
      "Raspberry Pi",
      "Display / TV",
      "Industrial IoT",
      "Networking",
      "Dashboard",
    ],

    problem:
      "Production information needs to be visible and understandable on the factory floor. A shared display allows relevant information to be viewed without relying entirely on individual workstations.",

    solution:
      "A production monitoring interface is presented on a dedicated shopfloor screen. This creates a central display for operational indicators and status information.",

    contribution: [
      "Gained hands-on exposure to shopfloor dashboard deployment.",
      "Explored dashboard presentation and screen configuration.",
      "Worked with Raspberry Pi and networking concepts.",
      "Supported display and application troubleshooting.",
      "Learned how industrial monitoring information can be presented to production teams.",
    ],

    architecture: [
      "Manufacturing monitoring data",
      "Dashboard visualisation",
      "Network connection",
      "Display device / browser",
      "Shopfloor television",
    ],

    outcome:
      "Practical exposure to manufacturing visual management, dashboard display systems and industrial monitoring infrastructure.",
  },
];
