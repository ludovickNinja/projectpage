const PROJECTS = [
  {
    id: 1,
    title: "Aurora Solitaire Ring",
    modelNumber: "JR-2041",
    status: "In Progress",
    dueDate: "2026-03-26",
    priority: "High",
    assignedTo: "Maya Chen",
    tags: ["engagement", "18k gold", "cad"],
    description:
      "Classic cathedral engagement ring concept with refined claw prongs and hidden halo profile.",
    notes:
      "Client asked to keep shank comfort-fit and maintain low-profile crown for daily wear.",
    specifications: {
      Metal: "18k Yellow Gold",
      "Stone type": "Lab-grown Diamond",
      "Ring size": "6.25",
      Collection: "Bridal 2026",
      Factory: "Shenzhen Atelier A"
    },
    checklist: {
      "CAD started": true,
      "Render approved": false,
      "Quote prepared": false,
      "Sent to factory": false
    },
    images: [
      { label: "CAD", src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80" },
      { label: "Render", src: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=600&q=80" },
      { label: "Reference", src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80" },
      { label: "Prototype", src: "https://images.unsplash.com/photo-1543295204-8e6d8cf2f817?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: 2,
    title: "Luna Halo Pendant",
    modelNumber: "PD-1183",
    status: "Review",
    dueDate: "2026-03-19",
    priority: "Medium",
    assignedTo: "Evelyn Ross",
    tags: ["pendant", "micro-pavé", "render"],
    description: "Oval halo pendant with asymmetrical bail and pavé edge detailing.",
    notes: "Awaiting gemstone ratio confirmation from sourcing team.",
    specifications: {
      Metal: "Platinum",
      "Stone type": "Natural Diamond",
      "Ring size": "N/A",
      Collection: "Luna Capsule",
      Factory: "Bangkok Precision"
    },
    checklist: {
      "CAD started": true,
      "Render approved": true,
      "Quote prepared": false,
      "Sent to factory": false
    },
    images: [
      { label: "CAD", src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
      { label: "Render", src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80" },
      { label: "Reference", src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" },
      { label: "Prototype", src: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: 3,
    title: "Heritage Signet",
    modelNumber: "SR-0932",
    status: "Backlog",
    dueDate: "2026-04-04",
    priority: "Low",
    assignedTo: "Alex Monroe",
    tags: ["signet", "engraving", "prototype"],
    description: "Rectangular signet ring with hand-engraved crest and brushed shoulder surfaces.",
    notes: "Need final vector artwork for crest depth map.",
    specifications: {
      Metal: "14k Rose Gold",
      "Stone type": "Onyx",
      "Ring size": "10",
      Collection: "Heritage",
      Factory: "Milan Craft House"
    },
    checklist: {
      "CAD started": false,
      "Render approved": false,
      "Quote prepared": false,
      "Sent to factory": false
    },
    images: [
      { label: "CAD", src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80" },
      { label: "Render", src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" },
      { label: "Reference", src: "https://images.unsplash.com/photo-1518544866330-95a2ab9f5f38?auto=format&fit=crop&w=600&q=80" },
      { label: "Prototype", src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: 4,
    title: "Celeste Bridal Set",
    modelNumber: "BR-7015",
    status: "Approved",
    dueDate: "2026-03-12",
    priority: "High",
    assignedTo: "Nina Patel",
    tags: ["bridal", "matching band", "approved"],
    description: "Two-piece bridal set with floating marquise center and curved wedding band.",
    notes: "Customer approved version C. Move to production batch next week.",
    specifications: {
      Metal: "18k White Gold",
      "Stone type": "Diamond + Marquise",
      "Ring size": "5.5",
      Collection: "Custom Bridal",
      Factory: "Ho Chi Minh Fineworks"
    },
    checklist: {
      "CAD started": true,
      "Render approved": true,
      "Quote prepared": true,
      "Sent to factory": false
    },
    images: [
      { label: "CAD", src: "https://images.unsplash.com/photo-1612177343582-665b6e6525c1?auto=format&fit=crop&w=600&q=80" },
      { label: "Render", src: "https://images.unsplash.com/photo-1589987607627-baa2a994beea?auto=format&fit=crop&w=600&q=80" },
      { label: "Reference", src: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80" },
      { label: "Prototype", src: "https://images.unsplash.com/photo-1535551951406-a19828b0a76b?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: 5,
    title: "Noir Baguette Band",
    modelNumber: "RB-5119",
    status: "Done",
    dueDate: "2026-03-08",
    priority: "Medium",
    assignedTo: "Maya Chen",
    tags: ["band", "baguette", "production"],
    description: "Anniversary band with east-west baguette channel and beveled side walls.",
    notes: "Completed and archived for catalog photography.",
    specifications: {
      Metal: "Black Rhodium Gold",
      "Stone type": "Baguette Diamond",
      "Ring size": "7",
      Collection: "Noir Line",
      Factory: "Bangkok Precision"
    },
    checklist: {
      "CAD started": true,
      "Render approved": true,
      "Quote prepared": true,
      "Sent to factory": true
    },
    images: [
      { label: "CAD", src: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=600&q=80" },
      { label: "Render", src: "https://images.unsplash.com/photo-1620656798579-1984d3f8a0c5?auto=format&fit=crop&w=600&q=80" },
      { label: "Reference", src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" },
      { label: "Prototype", src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: 6,
    title: "Iris Cluster Studs",
    modelNumber: "ER-4412",
    status: "In Progress",
    dueDate: "2026-03-21",
    priority: "Medium",
    assignedTo: "Jonas Hale",
    tags: ["earrings", "cluster", "cad"],
    description: "Petal-style cluster studs inspired by iris silhouette with hidden post lock.",
    notes: "Testing alternate stone spacing for better sparkle spread.",
    specifications: {
      Metal: "18k Rose Gold",
      "Stone type": "Pink Sapphire",
      "Ring size": "N/A",
      Collection: "Flora Atelier",
      Factory: "Surat Jewel Forge"
    },
    checklist: {
      "CAD started": true,
      "Render approved": false,
      "Quote prepared": false,
      "Sent to factory": false
    },
    images: [
      { label: "CAD", src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=600&q=80" },
      { label: "Render", src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80" },
      { label: "Reference", src: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80" },
      { label: "Prototype", src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: 7,
    title: "Verve Cuff Bangle",
    modelNumber: "BG-3380",
    status: "Review",
    dueDate: "2026-03-23",
    priority: "High",
    assignedTo: "Nina Patel",
    tags: ["bangle", "hinge", "review"],
    description: "Oval cuff bangle with invisible hinge and gradient pave accent line.",
    notes: "Need final clasp stress test report before production.",
    specifications: {
      Metal: "18k White Gold",
      "Stone type": "Diamond",
      "Ring size": "N/A",
      Collection: "Verve",
      Factory: "Istanbul Fine Metals"
    },
    checklist: {
      "CAD started": true,
      "Render approved": true,
      "Quote prepared": false,
      "Sent to factory": false
    },
    images: [
      { label: "CAD", src: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=600&q=80" },
      { label: "Render", src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" },
      { label: "Reference", src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" },
      { label: "Prototype", src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: 8,
    title: "Arcadia Men’s Band",
    modelNumber: "MB-2207",
    status: "Backlog",
    dueDate: "2026-04-15",
    priority: "Low",
    assignedTo: "Alex Monroe",
    tags: ["mens", "comfort fit", "draft"],
    description: "Wide men’s band with beveled outer edge and matte center channel.",
    notes: "Pending alloy availability check.",
    specifications: {
      Metal: "Titanium + Gold Inlay",
      "Stone type": "None",
      "Ring size": "11",
      Collection: "Arcadia",
      Factory: "Milan Craft House"
    },
    checklist: {
      "CAD started": false,
      "Render approved": false,
      "Quote prepared": false,
      "Sent to factory": false
    },
    images: [
      { label: "CAD", src: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=600&q=80" },
      { label: "Render", src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80" },
      { label: "Reference", src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80" },
      { label: "Prototype", src: "https://images.unsplash.com/photo-1543295204-8e6d8cf2f817?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: 9,
    title: "Opal Drift Necklace",
    modelNumber: "NK-8420",
    status: "Approved",
    dueDate: "2026-03-18",
    priority: "Medium",
    assignedTo: "Evelyn Ross",
    tags: ["necklace", "opal", "approved"],
    description: "Layered necklace concept with floating opal drops and micro curb chain.",
    notes: "Approved for first pilot run of 20 units.",
    specifications: {
      Metal: "14k Yellow Gold",
      "Stone type": "Australian Opal",
      "Ring size": "N/A",
      Collection: "Drift",
      Factory: "Ho Chi Minh Fineworks"
    },
    checklist: {
      "CAD started": true,
      "Render approved": true,
      "Quote prepared": true,
      "Sent to factory": false
    },
    images: [
      { label: "CAD", src: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80" },
      { label: "Render", src: "https://images.unsplash.com/photo-1543295204-8e6d8cf2f817?auto=format&fit=crop&w=600&q=80" },
      { label: "Reference", src: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80" },
      { label: "Prototype", src: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    id: 10,
    title: "Nova Prototype Collection",
    modelNumber: "CL-9900",
    status: "In Progress",
    dueDate: "2026-03-30",
    priority: "High",
    assignedTo: "Jonas Hale",
    tags: ["collection", "prototype", "launch"],
    description: "Five-piece prototype collection for summer showcase with celestial motifs.",
    notes: "Prioritize hero ring and pendant first for lookbook deadline.",
    specifications: {
      Metal: "Mixed Metals",
      "Stone type": "Diamond + Sapphire",
      "Ring size": "Mixed",
      Collection: "Nova",
      Factory: "Shenzhen Atelier A"
    },
    checklist: {
      "CAD started": true,
      "Render approved": false,
      "Quote prepared": false,
      "Sent to factory": false
    },
    images: [
      { label: "CAD", src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
      { label: "Render", src: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80" },
      { label: "Reference", src: "https://images.unsplash.com/photo-1518544866330-95a2ab9f5f38?auto=format&fit=crop&w=600&q=80" },
      { label: "Prototype", src: "https://images.unsplash.com/photo-1612177343582-665b6e6525c1?auto=format&fit=crop&w=600&q=80" }
    ]
  }
];
