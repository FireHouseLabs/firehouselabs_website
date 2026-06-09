
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'dev',
    title: 'Custom Software',
    description: 'Scalable web and mobile solutions built with cutting-edge frameworks and robust cloud infrastructure.',
    icon: '💻',
    fullDescription: "We don't just write code; we engineer solutions for longevity and performance. Our development process is focused on creating systems that handle high traffic and complex logic while maintaining extreme reliability.",
    features: [
      'High-performance distributed systems',
      'Real-time data synchronisation',
      'Scalable cloud-native architecture',
      'Security-first development lifecycle'
    ],
    benefits: [
      'Reduce technical debt from day one',
      'Seamless scaling for growing user bases',
      'Enterprise-grade security and compliance'
    ]
  },
  {
    id: 'design',
    title: 'UX/UI Design',
    description: 'Human-centric design that prioritises usability and aesthetic excellence for complex domain workflows.',
    icon: '🎨',
    fullDescription: "Design at Firehouse Labs is about more than just looking good. We specialise in information-dense interfaces where clarity and efficiency are paramount. Our designers work closely with engineers to ensure every interaction is meaningful.",
    features: [
      'User journey mapping & research',
      'High-fidelity interactive prototyping',
      'Design systems for scale',
      'Accessibility-focused interfaces (WCAG)'
    ],
    benefits: [
      'Increased user retention and satisfaction',
      'Reduced training time for complex software',
      'Consistent brand voice across all platforms'
    ]
  },
  {
    id: 'consulting',
    title: 'Product Strategy',
    description: 'Strategic roadmap planning and technical consulting to accelerate growth for enterprise and startups.',
    icon: '🚀',
    fullDescription: "Navigate the complex landscape of modern technology with confidence. We provide technical leadership and strategic oversight to help you make informed decisions that align with your long-term business goals.",
    features: [
      'Technical feasibility assessments',
      'Product roadmapping & MVP scoping',
      'Legacy system modernization strategy',
      'CTO-as-a-Service / Technical leadership'
    ],
    benefits: [
      'Avoid costly technical missteps',
      'Faster time-to-market for core features',
      'Clear alignment between tech and business'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'stationone',
    title: 'Streamlining Station Management for Emergency Services',
    client: 'Emergency Services Organizations',
    industry: 'Emergency Services',
    category: 'SaaS & Enterprise',
    image: 'https://images.unsplash.com/photo-1697952438910-b22a06a75501?q=80&w=2070&auto=format&fit=crop',
    description: 'Built to serve emergency services across Australia, StationOne brings together personnel, assets, and workflows in a secure platform tailored to real-world brigade structures.',
    fullCaseStudy: `## The Challenge
Emergency services organizations across Australia were grappling with a fragmented operational environment. Their core station operations — from crew rosters to asset management and member qualifications — relied on a complex patchwork of legacy systems, spreadsheets, and disconnected tools.

This disjointed approach led to significant operational challenges:
- **Time wasted switching between multiple systems**
- **Inconsistent data across different platforms**
- **Compliance risks from manual tracking of qualifications**
- **Delayed response readiness due to poor visibility**
- **Limited ability to adapt to evolving operational needs**

## The Solution: StationOne
Drawing from our team's 30+ years of combined frontline experience, we developed StationOne — an all-in-one platform purpose-built for fire and emergency services organizations.

### Core Capabilities:

- 🚨 **Crew & Roster Management:** Real-time crew availability tracking and automatic role coverage verification.
- 🧰 **Asset & Equipment Tracking:** Comprehensive management of appliances, breathing apparatus, and equipment with live status monitoring.
- 🎓 **Qualifications & Compliance:** Automated tracking of member certifications with expiry notifications and compliance reporting.
- 🧾 **Digital Forms & Logs:** Mobile-friendly digital workflows replacing paper-based processes for inspections and incident logging.
- 🧱 **Modular Architecture:** Flexible feature deployment at brigade, district, or regional levels with support for complex organizational hierarchies.

## The Results
StationOne transformed how emergency service organizations operate, delivering:

- ✅ **Unified Operations:** A single source of truth replaced multiple disconnected systems.
- ✅ **Enhanced Visibility:** Real-time access to unit readiness and capability status for commanders.
- ✅ **Deployment Flexibility:** Cloud-hosted SaaS or on-premise deployment within secure government infrastructure.
- ✅ **Compliance Assurance:** Built-in data sovereignty, audit logging, and granular permissions management.

## What Makes StationOne Different
We built StationOne to solve the frustrations we faced as firefighters ourselves — with a focus on simplicity, flexibility, and operational clarity.

StationOne isn't just another software solution — it's the culmination of decades spent understanding the unique challenges of emergency services. By combining frontline experience with technical expertise, we've created a platform that truly fits emergency service workflows.`
  },
  {
    id: 'aar-link',
    title: 'Transforming Emergency Services Learning',
    client: 'Emergency Services Organizations',
    industry: 'Emergency Services',
    category: 'SaaS / AI',
    image: 'https://images.unsplash.com/photo-1765117658416-099937b363ef?q=80&w=2070&auto=format&fit=crop',
    description: 'AI-powered platform accelerating incident analysis and improving operational safety via After Action Reviews.',
    fullCaseStudy: `## The Challenge
Emergency services organizations have long relied on manual, paper-based After Action Review processes that suffer from critical limitations:
- **Time-Intensive Analysis:** Manual review could take weeks.
- **Inconsistent Documentation:** Lack of standardized formats.
- **Limited Pattern Recognition:** Impossible to identify recurring themes across incidents.

## The Solution: AAR Link
We developed AAR Link — a specialised SaaS platform that revolutionizes how fire services and first responders conduct reviews.

### Core Capabilities:

- 🔍 **AI-Powered Theme Analysis:** Automatically identifies patterns across 8 critical categories.
- ⚡ **Dual Review System:** Quick reviews for immediate feedback and comprehensive AARs.
- 🏢 **Multi-Tenant Architecture:** Complete isolation for separate organizations.
- 📊 **Advanced Analytics:** Visual trend analysis with confidence-scored insights.

## The Results
AAR Link transformed how organizations learn from incidents:

- ✅ **Accelerated Learning Cycles:** Cut completion time from weeks to days.
- ✅ **Enhanced Safety Outcomes:** Identifies patterns before they result in incidents.
- ✅ **Data-Driven Decisions:** Analytics support evidence-based policy.`
  },
  {
    id: 'healthtalk-connect',
    title: 'Technology Supported Rehabilitation for Stroke & Aphasia Patients',
    client: 'La Trobe University & Epworth Hospital',
    industry: 'HealthTech & Medical Research',
    category: 'Mobile Health (mHealth)',
    image: 'https://images.unsplash.com/photo-1557825835-a526494be845?q=80&w=2070&auto=format&fit=crop',
    description: 'The HealthTalk Connect app accompanies stroke and aphasia patients throughout transitions in their healthcare, closing communication gaps and improving patient safety.',
    fullCaseStudy: `## The Challenge

Aphasia affects how safe patients are in hospital and how they communicate with their healthcare teams. Stroke patients with aphasia are more likely to experience preventable adverse events while in hospital.

The communication barriers faced by these patients create significant challenges:
- Increased risk of preventable adverse events during hospitalization
- Difficulty expressing pain, emotions, and medical needs
- Gaps in communication during care transitions
- Reduced patient safety and satisfaction
- Limited tools designed specifically for aphasia patients

## The Solution: HealthTalk Connect (Aphasia App)

Technology offers a solution. We collaborated with individuals with aphasia, their family, and healthcare workers to develop the Aphasia App — a new mHealth intervention tailored to support effective healthcare communication.

The app accompanies the patient throughout transitions in their healthcare, aiming to close potential communication gaps and improve patient safety and satisfaction.

### Key Features:

- 📚 **Content Database:** Common images and text designed for healthcare communication.

- 🔍 **Full Lazy Text Search:** Quick access to needed communication tools.

- ✏️ **Drawing Tool:** Visual communication when words fail.

- ✍️ **Freeform Writing Tool:** Text-based communication support.

- 💡 **Patient Communication Strategies:** Built-in guidance for effective communication.

- 📊 **Patient Information Scales:** Pain, feeling, and emotional scales for accurate symptom reporting.

## Research & Development Approach

We worked collaboratively with key stakeholders to ensure the app meets real-world needs:

- **Co-design with Patients:** Direct involvement of individuals with aphasia in development
- **Family Input:** Incorporated perspectives from family members and caregivers
- **Healthcare Worker Collaboration:** Designed with input from stroke unit staff
- **Evidence-Based:** Built on research understanding of aphasia and healthcare communication

## Current Research Phase

The usability of the beta version is currently being tested in an observational study with stroke patients and staff in acute and rehabilitation wards.

### Project Aims:

- Discover facilitators and barriers to implementation in acute stroke and rehabilitation settings
- Determine the app's effects on healthcare communication
- Evaluate impact on patient safety and satisfaction
- Study effectiveness under controlled conditions

The next step involves a comprehensive study of its effect on healthcare communication under controlled conditions.

## Technical Excellence

The HealthTalk Connect platform demonstrates sophisticated mobile health development:

- **Flutter Framework:** Native app experience for both iOS and Android platforms
- **Firebase Integration:** Reliable object storage and database infrastructure
- **Offline-First Design:** Ensures accessibility even without internet connectivity
- **Accessibility Focus:** Interface designed specifically for users with communication challenges
- **HIPAA Considerations:** Privacy-conscious design for sensitive health information

## Impact on Healthcare Communication

HealthTalk Connect represents a bridge between patients with aphasia and their healthcare teams:

- ✅ **Enhanced Safety:** Reduces preventable adverse events through improved communication
- ✅ **Patient Empowerment:** Gives voice to patients who struggle with traditional communication
- ✅ **Care Continuity:** Supports communication throughout care transitions
- ✅ **Evidence-Based Development:** Built on research and co-designed with end users
- ✅ **Clinical Research:** Contributing to understanding of technology-supported rehabilitation

## Research Partnership

This project demonstrates the power of academic-clinical-industry collaboration, bringing together:
- La Trobe University's research expertise
- Epworth Hospital's clinical environment
- Firehouse Labs' technical development capabilities
- Patient and family lived experience

Together, we're not just building an app — we're advancing the field of communication support for stroke and aphasia patients.`
  },
  {
    id: 'sayf',
    title: 'Breaking Down Barriers to Mental Health Support',
    client: 'You Are Sayf Inc.',
    industry: 'Healthcare & Mental Health',
    category: 'Mobile App (iOS/Android) & Web',
    image: 'https://images.unsplash.com/photo-1613618958001-ee9ad8f01f9c?q=80&w=2070&auto=format&fit=crop',
    description: 'Empowering individuals to communicate when words fail and connecting them with their support network.',
    fullCaseStudy: `## The Challenge

Mental health crises affect millions, yet reaching out for help remains one of the most difficult steps for those in need. Traditional support systems often require individuals to articulate their struggles when they're least able to do so, creating a critical gap in mental health care.

The founders, having lived experience with mental health challenges, identified key barriers:
- Difficulty expressing emotions during crisis moments
- Fear of judgment when reaching out for help
- Lack of easy connection to trusted support networks
- Limited accessibility to mental health resources
- Need for proactive check-in systems for ongoing support

## The Solution: Sayf

Sayf was born from personal experience and a deep understanding of mental health challenges. The platform embodies the philosophy: "Sayf will say what you can't" — providing a bridge when words fail.

### Core Features:

- 🆘 **Crisis Communication:** Simple interface to alert trusted contacts when struggling without needing to articulate complex emotions.

- 💬 **Check-in System:** Regular wellness monitoring that connects users with their support network proactively.

- 🔒 **Safety Planning:** Personalized crisis response plans accessible when needed most.

- 🤝 **Support Network Integration:** Seamless connection between individuals and their chosen support people.

- 📱 **Mobile-First Design:** Accessible interface designed for use during vulnerable moments.

- 🧭 **Resource Directory:** Curated mental health resources and professional support options.

## The Human Story

Sayf was founded by Caleb Podhazcky and Jeremy West, both bringing lived experience to the solution:

- **Caleb:** Having navigated personal struggles with mental health and substance abuse, brings authentic understanding of the challenges users face.

- **Jeremy:** As an emergency services volunteer with PTSD experience, understands both the individual and systemic aspects of mental health support.

This personal foundation ensures Sayf addresses real needs with genuine empathy and practical solutions.

## The Results

Sayf has transformed how individuals connect with mental health support:

- ✅ **Reduced Barriers:** Simplified the process of reaching out during crisis moments.

- ✅ **Proactive Support:** Enabled check-in systems that catch concerns before they escalate.

- ✅ **Network Strengthening:** Connected individuals with their chosen support people more effectively.

- ✅ **Accessibility Focus:** Mobile-first design ensures help is always within reach.

- ✅ **Evidence-Based Approach:** Built on research and lived experience for maximum impact.

## What Makes Sayf Different

>We didn't just research mental health challenges — we lived them. Sayf is built by people who understand what it feels like when you need help but can't find the words.
>
> — Caleb Podhazcky & Jeremy West, Founders

Sayf stands apart by:
- **Lived Experience Foundation:** Created by founders with personal mental health journeys
- **Simplicity in Crisis:** Designed specifically for use during vulnerable moments
- **Community-Centered:** Strengthens existing support networks rather than replacing them
- **Stigma-Conscious:** Removes judgment and barriers that prevent help-seeking

## Technical Excellence

The Sayf platform demonstrates sophisticated yet accessible development:
- **Mobile-Optimized:** Native app experience across iOS and Android
- **Responsive Web Platform:** Comprehensive web presence with mobile-first design
- **User-Centered Design:** Interface prioritizing ease of use during crisis moments
- **Security & Privacy:** Robust protection for sensitive mental health information

## Impact Beyond Technology

Sayf represents more than a digital solution — it's a movement toward making mental health support truly accessible. By removing barriers and simplifying the path to help, Sayf empowers individuals to take control of their mental health journey.`
  },
  {
    id: 'kaishan-hub',
    title: 'Internal & Customer Portal for a Global Compressor Manufacturer',
    client: 'Kaishan Compressors Australia',
    industry: 'Industrial Manufacturing',
    category: 'Enterprise Portal & Web App',
    image: 'https://images.unsplash.com/photo-1694532438941-06bb0d95dae5?q=80&w=2070&auto=format&fit=crop',
    description: 'A unified internal and external portal for Kaishan Compressors Australia, wrapping SharePoint for content management and featuring a sophisticated conditional form builder for pre-shipment, installation, and QA tests on hardware.',
    fullCaseStudy: `## The Challenge

Kaishan Compressors Australia — a division of Kaishan Global, one of the world's largest compressed air equipment manufacturers — needed a centralised digital platform to serve two distinct audiences: their internal team and their external customer and dealer network.

Their existing workflows relied heavily on disconnected tools, manual paperwork, and email chains to manage critical hardware processes including pre-shipment inspections, installation sign-offs, and quality assurance testing. This created:

- **No single source of truth** for product documentation, test results, or customer records
- **Time-consuming manual QA processes** with inconsistent form structures across hardware types
- **Limited visibility** for customers and dealers into their equipment status and documentation
- **Fragmented content management** spread across email, shared drives, and spreadsheets

## The Solution: Kaishan Hub

We designed and built Kaishan Hub — a dual-facing web portal that serves both internal staff and external customers, deeply integrated with the Microsoft ecosystem to leverage Kaishan's existing infrastructure.

### Internal Portal

The internal portal gives Kaishan's team a single operational hub, with SharePoint as the underlying content management system. Staff can manage product documentation, customer records, and hardware workflows without leaving a purpose-built interface.

### External Customer & Dealer Portal

External users — customers and authorised dealers — access a tailored view of their own equipment, documentation, and test records. Role-based access ensures each party sees only what's relevant to them.

### Conditional Form Builder

The centrepiece of the platform is a powerful conditional form engine built to handle the complexity of hardware QA processes:

- 📋 **Pre-Shipment Tests:** Structured checklists and sign-off flows triggered at dispatch.
- 🔧 **Installation Forms:** Step-by-step guided installation records tied to specific hardware models and configurations.
- ✅ **QA Test Forms:** Comprehensive quality assurance forms with branching logic — fields, sections, and requirements change dynamically based on hardware type, model, configuration, and previous answers.
- 🔀 **Complex Conditional Logic:** Form structure adapts in real time, ensuring technicians are only presented with fields relevant to the exact unit they're working on.
- 📁 **Audit Trail:** All completed forms are stored and linked to the relevant asset, customer, and job record.

## Technical Architecture

Kaishan Hub is built on Ruby on Rails and deeply integrated with the Microsoft Graph API and Azure ecosystem:

- **Ruby on Rails:** Robust, maintainable backend powering the portal, form engine, and business logic.
- **Microsoft Graph API:** Seamless integration with SharePoint for content management — files, pages, and documents managed in SharePoint surface natively within the portal.
- **Azure Active Directory:** Single sign-on and role-based access control for internal staff via their existing Microsoft accounts.
- **Azure Blob Storage:** Secure storage for completed forms, attachments, and hardware documentation.
- **SharePoint as CMS:** Internal content — product specs, technical bulletins, policies — is authored in SharePoint and consumed by the portal, keeping Kaishan's team in familiar tools.

## The Results

Kaishan Hub transformed how Kaishan Compressors Australia manages its hardware lifecycle and customer relationships:

- ✅ **Unified Platform:** Internal and external users work from a single, purpose-built hub rather than scattered tools.
- ✅ **Eliminated Paper QA:** Pre-shipment, installation, and QA processes are now fully digital with structured, enforced workflows.
- ✅ **Consistent Data:** Conditional form logic ensures the right information is always captured regardless of technician experience.
- ✅ **Microsoft Ecosystem Leverage:** Deep Graph and Azure integration allowed Kaishan to adopt a modern portal without abandoning existing infrastructure investment.
- ✅ **Customer Transparency:** Dealers and customers have direct access to their documentation and test records, reducing support overhead.`
  },
  {
    id: 'terraform',
    title: 'Automating Manual Booking Corrections for Go West Tours',
    client: 'Go West Tours',
    industry: 'Tourism',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop',
    description: 'Automated booking corrections platform eliminating manual interventions for 70% of bookings, saving significant staff hours.',
    fullCaseStudy: `## The Challenge
Go West Tours, a leading Australian tourism operator, faced a persistent operational bottleneck: their reservations team was spending a substantial amount of time manually correcting tour departure (pickup) details for bookings made via third-party agents.

Although these agents had direct API integrations with FareHarbor, the data received by guests was often inaccurate or incomplete. This resulted in thousands of bookings per year requiring hands-on intervention — all managed manually through email and spreadsheets.

This manual burden not only strained their reservations team but introduced the risk of human error and impacted the guest experience.

## The Solution: TerraForm
We partnered with Go West Tours to design and build TerraForm, a bespoke automation platform built to bridge the data gap between agent bookings and FareHarbor.

### Key Features of TerraForm:

- 🧠 **Booking Data Monitoring:** Automatically scans incoming bookings from third-party agents via FareHarbor.
- 🔁 **Automated Corrections:** Applies business rules to detect incorrect or missing information and updates bookings accordingly.
- 🌐 **Web-Based Dashboard:** Allows Go West staff to view and audit automation history, status, and changes in real time.
- 🗺️ **Custom Mapping Engine:** Translates inconsistent data formats (e.g., pickup location codes or descriptions) into Go West's internal standards before writing back to FareHarbor.

## The Results
Within weeks of deployment, TerraForm eliminated the need for manual intervention across thousands of bookings annually — unlocking:

- ✅ **Time savings:** Staff hours previously spent on repetitive corrections were redirected to high-value tasks.
- ✅ **Cost reductions:** A measurable decrease in operational overhead within the reservations team.
- ✅ **Improved guest experience:** Guests now receive timely, accurate pickup details without delay or confusion.

## What the Client Said
We were manually processing pickup information for 70% of our bookings. TerraForm has transformed that process, allowing us to scale without adding headcount and reduce human error. It's been a huge win for our team.

## Could Automation Save Your Team Hours Each Week?
If your business is manually cleaning up booking data, cross-checking information between systems, or constantly "fixing things" your platforms should do automatically — you're not alone.

Firehouse Labs builds custom automation solutions like TerraForm for tourism operators and SMEs who are ready to reclaim their time.`
  }
];
