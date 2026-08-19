export const membershipsData = [
  // 1. Industrial Membership
  {
    id: "industrial-membership",
    type: "options-based",
    title: "Industrial Membership",
    image: "/card/Industrial_Membership-card.jpg",
    category: "Industrial Membership",
    commonBenefits: [
      { title: "Training (Offline)", value: "99,500 BDT" },
      { title: "Training (Online)", value: "30,000 BDT" },
      { title: "Recorded Version (Online & Offline)", value: "200,000 BDT+" },
      { title: "Multiple Branches Access", value: "Priceless (Anytime)" },
      { title: "Own R&D Lab (9am–11pm)", value: "Priceless (All Branch)" },
      { title: "Technical Resources / Article", value: "Priceless" },
      { title: "Factory Visit", value: "1" },
      { title: "Project Support (Minor)", value: "Real Field" },
      { title: "Career Support", value: "Priceless" },
      { title: "Job Placement & Skill Migration", value: "Interview Board" },
      { title: "Alumni Association Club", value: "10,000+" },
      { title: "Corporate Skill Development", value: "Priceless" },
      { title: "NSDA Verified Certification", value: "Govt Recognized" },
      { title: "ISO 21001 Verified Certification", value: "Internationally Recognized" }
    ],
    extraBenefits: [
      { title: "Discount in Next Membership", value: "8%" },
      { title: "Certificate Types", value: "Certification" },
      { title: "Free Access in Webinar / Workshop", value: "Yes" },
      { title: "Discount for Friends & Family", value: "5%" },
      { title: "Invite Friends & Family for 3 Paid Courses Free", value: "3 Person/Month" }
    ],
    options: [
      {
        id: "automation-pro",
        title: "Automation Pro",
        regularPrice: "80,000 BDT",
        specialFee: "50,000 BDT",
        discount: "30%",
        coreFee: "70,000 BDT",
        extendedSkillsFee: "10,000 BDT",
        features: [
          "Industrial Relay Logic & Control Circuit Engineering",
          "MCC Design, Operation & Troubleshooting",
          "Multi-Brand PLC Programming Professional (Siemens, Delta, Mitsubishi, Allen-Bradley, Wecon, Kinco and Other Industrial PLC)",
          "Multi-Brand HMI Design & Process Visualization (Siemens, Delta, Kinco, Wecon, FLEXEM and Other Industrial HMI Platforms)",
          "Multi-Brand VFD Control & PLC Integration (Delta, Siemens, Mitsubishi, SINEE, Kinco, Wecon and Other Industrial Drive Platforms)",
          "Industrial Instrumentation Mastery",
          "Industrial Automation System Design & Engineering",
          "Servo & Stepper Motion Control (Position, Speed, Torque and Pulse Control, Homing, Indexing, Precision Positioning & Industrial Motion)",
          "Closed-Loop Process Control & PID Tuning",
          "PROFINET Industrial Networking",
          "Modbus Communication Protocol Mastery",
          "Smart Energy Metering & Power Monitoring",
          "Industrial Instrument Calibration & Testing"
        ],
        extendedSkills: [
          "Professional Electrical Design with AutoCAD"
        ]
      },
      {
        id: "solar-pv-power-plant-design",
        title: "Solar PV Power Plant Design",
        regularPrice: "47,000 BDT",
        specialFee: "30,000 BDT",
        discount: "36%",
        coreFee: "30,000 BDT",
        extendedSkillsFee: "17,000 BDT",
        features: [
          "Solar PV Power Plant Fundamentals",
          "Solar PV System Technologies",
          "Solar Plant Components & Equipment",
          "Advanced Solar PV Module Technology",
          "PV Module Datasheet Analysis",
          "Solar Inverter Fundamentals",
          "Inverter Sizing & Datasheet Engineering",
          "Temperature-Based PV String Design",
          "100 kW On-Grid Design with Microsoft Excel",
          "Multi-Capacity Solar System Design",
          "Comparative Solar System Analysis",
          "SketchUp for Solar Engineering",
          "Professional Solar Plant Layout Design",
          "Solar Mounting Structure Engineering",
          "PVsyst Design & Energy Simulation",
          "Electrical Protection & SLD Engineering",
          "Solar BoQ & EPC Cost Estimation",
          "Battery Bank Design & Engineering",
          "5 kW Off-Grid Solar System Design",
          "Solar Plant Performance Analytics",
          "Real-World MW-Scale Solar EPC Project"
        ],
        extendedSkills: [
          "Professional Electrical Design with AutoCAD (10,000 BDT)",
          "Power System Design & Analysis with ETAP (7,000 BDT)"
        ]
      },
      {
        id: "power-system-design",
        title: "Power System Design",
        regularPrice: "57,000 BDT",
        specialFee: "30,000 BDT",
        discount: "47%",
        coreFee: "30,000 BDT",
        extendedSkillsFee: "27,000 BDT",
        features: [
          "132/33 kV Grid Substation Design & Engineering",
          "11/0.4 kV Distribution Substation Design",
          "Switchgear Selection, Sizing & Calculation",
          "Substation Control, Protection & Automation",
          "Earthing & Lightning Protection System Design",
          "Electrical Panel Design & Engineering Calculation",
          "Power-System Design & Analysis with ETAP"
        ],
        extendedSkills: [
          "Professional Electrical Design with AutoCAD (10,000 BDT)",
          "Industrial Relay Logic & Control Circuit Engineering (10,000 BDT)",
          "MCC Design, Operation & Troubleshooting",
          "Off-Grid Solar Power System Design & Engineering (7,000 BDT)"
        ]
      },
      {
        id: "hvac-system",
        title: "HVAC System",
        regularPrice: "57,000 BDT",
        specialFee: "30,000 BDT",
        discount: "47%",
        coreFee: "30,000 BDT",
        extendedSkillsFee: "27,000 BDT",
        features: [
          "HVAC System Design & Engineering",
          "Professional HVAC Drafting & Documentation",
          "HVAC Estimation, BoQ & Costing",
          "HVAC Installation & Project Execution",
          "HVAC Testing, Commissioning & Troubleshooting"
        ],
        extendedSkills: [
          "Professional Electrical Design with AutoCAD (10,000 BDT)",
          "Industrial Relay Logic & Control Circuit Engineering (10,000 BDT)",
          "MCC Design, Operation & Troubleshooting",
          "Off-Grid Solar Power System Design & Engineering (7,000 BDT)"
        ]
      }
    ]
  },

  // 2. Bronze Membership
  {
    id: "bronze-membership",
    type: "standard",
    title: "Bronze Membership",
    image: "/card/Bronze-01.png",
    badge: "Bronze Membership",
    tagline: "Essential Engineering & Technical Training Program",
    courses: [
      {
        id: "industrial-robotics-programming",
        title: "Industrial Robotics Programming, Motion Control & Smart Integration",
        originalPrice: "180,000 BDT",
        price: "50,000 BDT",
        discount: "72%",
        isPopular: false,
        features: [
          "Industrial Robotics & Automation Fundamentals",
          "Industrial Electrical Control & Robot-Cell Wiring",
          "Industrial Sensors, Encoders & I/O Integration",
          "Robot Hardware, Controller & Mechanical Basics",
          "Industrial Robot Safety & Risk Assessment",
          "Siemens PLC Programming for Robotics",
          "PLC Sequence, State-Machine & Alarm Programming",
          "Robotics Design Fundamentals & SOLIDWORKS Fast Track",
          "Parametric Component Design & Functional Assembly",
          "Servo Motor, Gearbox & Rotary Robot Joint Design",
          "Linear Axis, Cartesian Robot & Gantry Mechanism",
          "Robotic Gripper & End-of-Arm Tooling Design",
          "Conveyor, Machine Frame & Robot-Cell Layout",
          "Motion Verification, Rendering, Drawing & Final Project",
          "SOLIDWORKS-to-ANSYS Workflow & Critical Component Selection",
          "Materials, Connections & Practical Meshing for Robotic Parts",
          "Static Structural Analysis of Critical Robot Components",
          "Design Improvement, Re Analysis & Final Component Selection",
          "Basic Modal Check, Validation Report & Final Design Outcome",
          "Servo, Stepper & PLCopen Motion Control",
          "Multi-Axis Robotic Arm Commissioning",
          "Robot Position Teaching & Pick and-Place Programming",
          "Advanced Teach Pendant & Borunte Cobot Programming",
          "Robot Coordinates, TCP & Work-Frame Configuration",
          "Industrial Robot Programming Professional",
          "Siemens & Delta HMI Design for Robotics",
          "WECON AC60 & CODESYS Motion Control",
          "Kinco PLC-Based Motion Control",
          "PROFINET, Modbus & Industrial Ethernet",
          "Smart PLC-Robot Communication & Handshaking",
          "Robot-Cell Troubleshooting & Diagnostics",
          "PLC-Robot-HMI Integrated Capstone Project",
          "Electrical Design with AutoCAD"
        ],
         extendedSkills:[
            "Electrical Design With AutoCAD (10,000 BDT)"
         ]
      },
      {
        id: "advanced-bms-ddc-automation",
        title: "Advanced BMS, DDC & Smart Building Automation Professional Program",
        originalPrice: "175,000 BDT",
        price: "50,000 BDT",
        discount: "71%",
        isPopular: false,
        features: [
          "DDC Programming Professional",
          "Multi-Brand VSD/VFD Programming & Commissioning",
          "Relay Logic Control Fundamentals",
          "MCC Design, Operation & Troubleshooting",
          "Industrial Instrumentation Mastery",
          "Touch Panel Automation",
          "Instrument Calibration & Testing",
          "Industrial Communication Protocols",
          "SCADA & BMS System Design with enteliWEB",
          "Industrial Internet of Things—IIoT Systems",
          "Web Access & API Integration",
          "Alarm & Event Management Systems",
          "Energy Management Systems—EMS",
          "Data Acquisition, Trending & Historian",
          "Access Control, Security & Fire Alarm Integration",
          "Advanced BMS Functions & Optimization",
          "Reporting & Data Analytics",
          "Smart Lighting & Energy Optimization",
          "enteliTOOLS Professional Applications",
          "HVAC Control & Environmental Monitoring",
          "Electrical Design with AutoCAD"
        ],
         extendedSkills:[
            "Electrical Design With AutoCAD (10,000 BDT)"
         ]
      },
      {
        id: "scada-pro",
        title: "SCADA Pro",
        originalPrice: "175,000 BDT",
        price: "50,000 BDT",
        discount: "71%",
        isPopular: false,
        features: [
          "SCADA Fundamentals & WinCC Architecture",
          "Modbus RTU Communication Engineering",
          "Multi-Device Modbus RTU Integration",
          "PROFIBUS DP, Bus Coupler & Remote I/O",
          "PROFINET Networks & PLC Data Exchange",
          "Multi-Brand PLC & HMI Ethernet Integration",
          "EtherCAT Motion-Control Networking",
          "EtherNet/IP & Cross-Vendor Industrial Ethernet",
          "OPC UA Integration & Secure Data Exchange",
          "MQTT & IIoT SCADA Integration",
          "Combined Multi-Protocol System Integration",
          "Advanced SCADA Remote & Cloud Control",
          "Industrial Reporting, SQL & Analytics",
          "Professional HMI Screen Design & Visualization",
          "Alarm Management & Operator Response",
          "Data Acquisition, Historian & Audit Trail",
          "SCADA Security & User Administration",
          "HTML for Industrial SCADA Web Pages",
          "CSS for Responsive SCADA Dashboards",
          "Industrial Gateway & Protocol Conversion",
          "Instrument Calibration & Loop Testing",
          "Industrial SCADA Case Studies & Integrated Project",
          "CODESYS PLC Programming & Visualization",
          "CODESYS PROFINET / Industrial Ethernet Project",
          "Electrical Design with AutoCAD"
        ],
         extendedSkills:[
            "Electrical Design With AutoCAD (10,000 BDT)"
         ]
      },
      {
        id: "mw-scale-solar-pv-power-plant",
        title: "MW Scale Solar PV Power Plant Design with SCADA",
        originalPrice: "80,000 BDT",
        price: "50,000 BDT",
        discount: "37%",
        isPopular: false,
        features: [
          "Solar PV Power Plant Fundamentals",
          "Solar PV System Technologies",
          "Solar Plant Components & Equipment",
          "Advanced Solar PV Module Technology",
          "PV Module Datasheet Analysis",
          "Solar Inverter Fundamentals",
          "Inverter Sizing & Datasheet Engineering",
          "Temperature-Based PV String Design",
          "100 kW On-Grid Design with Microsoft Excel",
          "Multi-Capacity Solar System Design",
          "Comparative Solar System Analysis",
          "SketchUp for Solar Engineering",
          "Professional Solar Plant Layout Design",
          "Solar Mounting Structure Engineering",
          "PVsyst Design & Energy Simulation",
          "Electrical Protection & SLD Engineering",
          "Solar BoQ & EPC Cost Estimation",
          "Battery, ESS & BESS Technology",
          "Battery Bank Design & Engineering",
          "5 kW Off-Grid Solar System Design",
          "Solar Plant Performance Analytics",
          "Real-World MW-Scale Solar EPC Project",
          "SCADA Fundamentals for Solar Plants",
          "Industrial Communication & Networking",
          "Power Control & Monitoring System (PCMS)",
          "Solar Energy Monitoring & Management System",
          "Alarm, Event & Fault Monitoring System",
          "Electrical Design with AutoCAD"
        ],

         extendedSkills:[
            "Electrical Design With AutoCAD (10,000 BDT)"
         ]
      }
    ],
    commonBenefits: [
      { title: "Training (Offline)", value: "194,500 BDT" },
      { title: "Training (Online)", value: "70,000 BDT" },
      { title: "Recorded Version (Online & Offline)", value: "400,000 BDT+" },
      { title: "Multiple Branches Access", value: "Priceless (Anytime)" },
      { title: "Own R&D Lab (9am–11pm)", value: "Priceless (All Branch)" },
      { title: "Technical Resources / Article", value: "Priceless" },
      { title: "Factory Visit", value: "2" },
      { title: "Project Support (Minor)", value: "Real Field" },
      { title: "Career Support", value: "Priceless" },
      { title: "Job Placement & Skill Migration", value: "Interview Board" },
      { title: "Alumni Association Club", value: "10,000+" },
      { title: "Corporate Skill Development", value: "Priceless" },
      { title: "NSDA Verified Certification", value: "Govt Recognized" },
      { title: "ISO 21001 Verified Certification", value: "Internationally Recognized" }
    ],
    extraBenefits: [
      { title: "Discount in Next Membership", value: "12%" },
      { title: "Certificate Types", value: "Certification" },
      { title: "Free Access in Webinar", value: "Yes" },
      { title: "Free Access in Workshop", value: "Yes" },
      { title: "Free Access in Seminar", value: "Yes" },
      { title: "Free Access in Relevant Paid Short Course (Offline)", value: "1" },
      { title: "Free Access in Relevant Paid Short Course (Online)", value: "1" },
      { title: "Higher Study Guideline", value: "Yes" },
      { title: "Discount for Friends & Family", value: "5%" },
      { title: "Paid Courses Free for Friends & Family", value: "5 Person/Month" }
    ]
  },

  // 3. Silver Membership
  {
    id: "silver-membership",
    type: "standard",
    title: "Silver Membership",
    image: "/card/Silver-01.png",
    badge: "Silver Membership",
    regularPrice: "274,500 BDT",
    specialFee: "89,000 BDT",
    discount: "67%",
    coreFee: "245,000 BDT",
    extendedSkillsFee: "29,500 BDT",
    courses: [
      {
        id: "silver-engineering-automation-program",
        title: "Advanced Industrial Automation & Integrated Smart Systems Program",
        originalPrice: "274,500 BDT",
        price: "89,000 BDT",
        discount: "67%",
        isPopular: true,
        features: [
          "Relay Logic Control Fundamentals",
          "MCC Design, Operation & Troubleshooting",
          "VFD Drive Control & PLC Integration",
          "Advanced PLC Programming Professional",
          "Professional HMI Design & Development",
          "SCADA System Design Fundamentals",
          "Industrial Instrumentation Mastery",
          "Industrial Automation System Design",
          "Servo & Stepper Motion Control",
          "Closed-Loop Control & PID Tuning",
          "Advanced Motion Control Programming",
          "Collaborative & Conventional Industrial Robotics",
          "Robot Hardware & Control Systems",
          "Industrial Robot Programming Essentials",
          "Smart PLC–Robot Integration",
          "EtherCAT Motion Control Networking",
          "PROFINET Industrial Networking",
          "Modbus Protocol Mastery",
          "Smart Energy Metering & Power Monitoring",
          "Instrument Calibration & Testing",
          "CODESYS Platform & Control System Fundamentals",
          "Professional PLC Programming with CODESYS",
          "SCADA Architecture & System Design",
          "HMI, SCADA & Advanced Process Visualization",
          "Industrial Communication & Device Integration",
          "Alarm, Event & Energy Management Systems",
          "Industrial Data Acquisition, Historian & Trending",
          "SCADA Security & User Administration",
          "Advanced SCADA Functions & Automation",
          "Industrial Reporting & Data Analytics",
          "SCADA Commissioning, Calibration & Validation",
          "Complete CODESYS–SCADA Industrial Project",
          "DDC Programming Professional",
          "Industrial Touch-Panel Automation",
          "HVAC Automation & Control Systems",
          "enteliWEB, GCL+ & Python for Automation"
        ]
      }
    ],
    commonBenefits: [
      { title: "Training (Offline)", value: "274,500 BDT" },
      { title: "Training (Online)", value: "130,000 BDT" },
      { title: "Recorded Version (Online & Offline)", value: "500,000 BDT+" },
      { title: "Multiple Branches Access", value: "Priceless (Anytime)" },
      { title: "Own R&D Lab (9am–11pm)", value: "Priceless (All Branch)" },
      { title: "Technical Resources / Article", value: "Priceless" },
      { title: "Factory Visit", value: "3-5" },
      { title: "Project Support (Minor)", value: "Real Field" },
      { title: "Career Support", value: "Priceless" },
      { title: "Job Placement & Skill Migration", value: "Interview Board" },
      { title: "Alumni Association Club", value: "10,000+" },
      { title: "Corporate Skill Development", value: "Priceless" },
      { title: "NSDA Verified Certification", value: "Govt Recognized" },
      { title: "ISO 21001 Verified Certification", value: "Internationally Recognized" }
    ],
    extraBenefits: [
      { title: "Discount in Next Membership", value: "20%" },
      { title: "Certificate Types", value: "Certification" },
      { title: "Free Access in Webinar", value: "Yes" },
      { title: "Free Access in Workshop", value: "Yes" },
      { title: "Free Access in Seminar", value: "Yes" },
      { title: "Free Access in Relevant Paid Short Course (Offline)", value: "2" },
      { title: "Free Access in Relevant Paid Short Course (Online)", value: "2" },
      { title: "Internship Opportunity in UE Energy & Control Ltd", value: "Yes" },
      { title: "Higher Study Guideline", value: "Yes" },
      { title: "University Thesis/Project", value: "Yes" },
      { title: "Project Visit", value: "Yes" },
      { title: "Discount for Friends & Family", value: "10%" },
      { title: "Paid Courses Free for Friends & Family", value: "10 Person/Month" }
    ],
    features: [
      "Relay Logic Control Fundamentals",
      "MCC Design, Operation & Troubleshooting",
      "VFD Drive Control & PLC Integration",
      "Advanced PLC Programming Professional",
      "Professional HMI Design & Development",
      "SCADA System Design Fundamentals",
      "Industrial Instrumentation Mastery",
      "Industrial Automation System Design",
      "Servo & Stepper Motion Control",
      "Closed-Loop Control & PID Tuning",
      "Advanced Motion Control Programming",
      "Collaborative & Conventional Industrial Robotics",
      "Robot Hardware & Control Systems",
      "Industrial Robot Programming Essentials",
      "Smart PLC–Robot Integration",
      "EtherCAT Motion Control Networking",
      "PROFINET Industrial Networking",
      "Modbus Protocol Mastery",
      "Smart Energy Metering & Power Monitoring",
      "Instrument Calibration & Testing",
      "CODESYS Platform & Control System Fundamentals",
      "Professional PLC Programming with CODESYS",
      "SCADA Architecture & System Design",
      "HMI, SCADA & Advanced Process Visualization",
      "Industrial Communication & Device Integration",
      "Alarm, Event & Energy Management Systems",
      "Industrial Data Acquisition, Historian & Trending",
      "SCADA Security & User Administration",
      "Advanced SCADA Functions & Automation",
      "Industrial Reporting & Data Analytics",
      "SCADA Commissioning, Calibration & Validation",
      "Complete CODESYS–SCADA Industrial Project",
      "DDC Programming Professional",
      "Industrial Touch-Panel Automation",
      "HVAC Automation & Control Systems",
      "enteliWEB, GCL+ & Python for Automation"
    ],
    extendedSkills: [
      { title: "Professional Electrical Design with AutoCAD", price: "10,000 BDT" },
      { title: "Power System Design & Analysis with ETAP", price: "7,000 BDT" },
      { title: "Off-Grid Solar Power System Design & Engineering", price: "12,500 BDT" }
    ]
  },

  // 4. Gold Membership
  {
    id: "gold-membership",
    type: "standard",
    title: "Gold Card Membership",
    image: "/card/Gold-01.png",
    badge: "Gold Card Membership",
    programName: "Automation System Engineer Program (APEC-SE)",
    regularPrice: "394,500 BDT",
    specialFee: "160,000 BDT",
    discount: "59%",
    totalFee: "394,500 BDT",
    courses: [
      {
        id: "automation-system-engineer-program",
        title: "Automation System Engineer Program (APEC-SE)",
        originalPrice: "394,500 BDT",
        price: "160,000 BDT",
        discount: "59%",
        isPopular: true,
        features: [
          "AI Automation for BMS & Industrial SCADA",
          "Industrial Robot & Process Automation",
          "Codesys System Design & Visualization",
          "Automation Pro (PLC, VFD, HMI, Instrumentation & Servo)",
          "SCADA Pro & Process Data Acquisition",
          "Building Management System (BMS, DDC, enteliWEB & HVAC)"
        ]
      }
    ],
    commonBenefits: [
      { title: "Training (Offline)", value: "394,500 BDT" },
      { title: "Training (Online)", value: "190,000 BDT" },
      { title: "Recorded Version (Online & Offline)", value: "600,000 BDT+" },
      { title: "Multiple Branches Access", value: "Priceless (Anytime)" },
      { title: "Own R&D Lab (9am–11pm)", value: "Priceless (All Branch)" },
      { title: "Technical Resources / Article", value: "Priceless" },
      { title: "Factory Visit", value: "3-6" },
      { title: "Project Support (Minor)", value: "Real Field" },
      { title: "Career Support", value: "Priceless" },
      { title: "Job Placement & Skill Migration", value: "Interview Board" },
      { title: "Alumni Association Club", value: "10,000+" },
      { title: "Corporate Skill Development", value: "Priceless" },
      { title: "NSDA Verified Certification", value: "Govt Recognized" },
      { title: "ISO 21001 Verified Certification", value: "Internationally Recognized" }
    ],
    extraBenefits: [
      { title: "Discount in Next Membership", value: "25%" },
      { title: "Certificate Types", value: "Certification" },
      { title: "Free Access in Webinar", value: "Yes" },
      { title: "Free Access in Workshop", value: "Yes" },
      { title: "Free Access in Seminar", value: "Yes" },
      { title: "Free Access in Relevant Paid Short Course (Offline)", value: "4" },
      { title: "Free Access in Relevant Paid Short Course (Online)", value: "2" },
      { title: "All Regular Electrical Guide", value: "Yes" },
      { title: "Advanced Electrical Guide", value: "Yes" },
      { title: "Internship Opportunity at UE Energy & Control Ltd", value: "Yes" },
      { title: "Higher Study Guideline", value: "Yes" },
      { title: "University Thesis/Project", value: "Yes" },
      { title: "E-Learning Access", value: "Partial" },
      { title: "Project Visit", value: "Yes" },
      { title: "Discount for Friends & Family", value: "15%" },
      { title: "Paid Courses Free for Friends & Family", value: "15 Person/Month" }
    ],
    modules: [
      {
        category: "AI Automation for BMS & Industrial SCADA",
        fee: "80,000 BDT",
        topics: [
          "AI Basics for Automation Engineers",
          "Industrial Data Handling for AI",
          "AI Tools & Programming for Automation",
          "AI Integration with PLC, DDC & SCADA",
          "AI Applications in BMS & Industrial"
        ]
      },
      {
        category: "Industrial Robot & Process Automation",
        fee: "55,000 BDT",
        topics: [
          "Collaborative Robot (Cobot)",
          "Robot Hardware & Controller",
          "Robot Programming",
          "PLC & Robot Integration",
          "Industrial Communication with Robot"
        ]
      },
      {
        category: "Codesys",
        fee: "30,000 BDT",
        topics: [
          "Introduction to CODESYS Platform",
          "PLC Programming with CODESYS",
          "Visualization / HMI Design in CODESYS",
          "Multi-Communication in CODESYS",
          "Practical Industrial Applications"
        ]
      },
      {
        category: "Automation Pro",
        fee: "70,000 BDT",
        topics: [
          "PLC (Multi Brand)",
          "VFD (Multi Brand)",
          "HMI (Multi Brand)",
          "Instrumentation",
          "Servo/Stepper (Multi Brand)",
          "Automation Design",
          "Close Loop",
          "MCC/RLC",
          "PROFINET Communication",
          "Modbus Communication",
          "Energy Meter & Power Monitoring",
          "Professional Industrial Instrumentation Calibration & Testing"
        ]
      },
      {
        category: "SCADA Pro",
        fee: "50,000 BDT",
        topics: [
          "SCADA",
          "HMI (Multi Brand) & Visualization",
          "Alarm Management System Energy Management System",
          "Process SCADA",
          "Data Acquisition",
          "Security & Administration",
          "Communication Protocol",
          "Advance SCADA Function",
          "Industrial Reporting & Analysis",
          "Calibration"
        ]
      },
      {
        category: "Building Management System (BMS)",
        fee: "80,000 BDT",
        topics: [
          "DDC",
          "Communication Protocol",
          "Enteliweb & GCL+, Python",
          "HVAC Control & Environment Control",
          "Lighting & Energy Management Control",
          "Security Access & Fire Control",
          "BMS & IIOT",
          "Web Access & API",
          "Enteli Vault",
          "Reporting & Data Analysis",
          "Smart Building BMS"
        ]
      }
    ],
    extendedSkills: [
      { title: "Solar Off-Grid System", price: "12,500 BDT" },
      { title: "Electrical AutoCAD", price: "10,000 BDT" },
      { title: "Power System Design with ETAP", price: "7,000 BDT" }
    ]
  },

  // 5. Elite Membership
  {
    id: "elite-membership",
    type: "contact-only",
    title: "Elite Membership",
    image: "/card/Elite-01.png",
    badge: "Elite Membership",
    description: "Our highest-tier personalized membership experience for individuals who require exclusive guidance, direct consultation, customized opportunities, and priority engagement.",
    highlights: [
      "Exclusive membership benefits and priority support",
      "Customized learning and career guidance",
      "Professional consultation before enrollment",
      "Special opportunities based on profile and goals"
    ],
    contactInfo: {
      title: "Contact Office for Details",
      description: "Elite Membership is designed for individuals seeking a more personalized and strategic pathway. To ensure the best fit, detailed information, eligibility, and benefits are provided directly through our office consultation.",
      details: [
        { label: "Phone", value: "+8801818988959", icon: "phone" },
        { label: "Email", value: "info@ueenergycontrol.com", icon: "email" },
        { label: "Consultation", value: "Personalized office discussion required", icon: "user-check" },
        { label: "Office Visit", value: "Visit our office for complete details and enrollment support", icon: "map-pin" }
      ],
      buttonText: "Contact Office Now"
    }
  },

  // 6. VIP Membership
  {
    id: "vip-membership",
    type: "contact-only",
    title: "VIP Membership",
    image: "/card/VIP-01.png",
    badge: "VIP Membership",
    description: "Our highest-tier personalized membership experience for individuals who require exclusive guidance, direct consultation, customized opportunities, and priority engagement.",
    highlights: [
      "Exclusive membership benefits and priority support",
      "Customized learning and career guidance",
      "Professional consultation before enrollment",
      "Special opportunities based on profile and goals"
    ],
    contactInfo: {
      title: "Contact Office for Details",
      description: "VIP Membership is designed for individuals seeking a more personalized and strategic pathway. To ensure the best fit, detailed information, eligibility, and benefits are provided directly through our office consultation.",
      details: [
        { label: "Phone", value: "+8801818988959", icon: "phone" },
        { label: "Email", value: "info@ueenergycontrol.com", icon: "email" },
        { label: "Consultation", value: "Personalized office discussion required", icon: "user-check" },
        { label: "Office Visit", value: "Visit our office for complete details and enrollment support", icon: "map-pin" }
      ],
      buttonText: "Contact Office Now"
    }
  }
];