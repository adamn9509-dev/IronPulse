export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
}

export interface ClassSession {
  id: string;
  title: string;
  time: string;
  duration: string;
  instructor: string;
  intensity: 'Low' | 'Medium' | 'High';
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
