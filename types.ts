
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription?: string;
  features?: string[];
  benefits?: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  image: string;
  description: string;
  fullCaseStudy?: string;
}

// Added ConsultationResponse to fix compilation errors in Gemini AI features
export interface ConsultationResponse {
  summary: string;
  roadmap: {
    phase: string;
    tasks: string[];
  }[];
  technologies: string[];
}
