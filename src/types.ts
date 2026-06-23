export interface Project {
  id: string;
  title: string;
  category: 'corporate-experiential' | 'milestones-celebrations' | 'photo-shoots-styling' | 'popup-retail';
  categoryLabel: string;
  clientName: string;
  location: string;
  mainImage: string;
  galleryImages: string[];
  description: string;
  results: string;
  year: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface PressEntry {
  id: string;
  year: string;
  title: string;
  publisher: string;
  description: string;
  category: 'Featured' | 'Industry Recognition' | 'Awards' | 'Media Mentions' | 'Editorial Highlights';
  link?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  company?: string;
  designation?: string;
  category: string;
}

export interface ClientStory {
  company: string;
  logoText: string;
  impact: string;
  description: string;
  imageUrl: string;
}
