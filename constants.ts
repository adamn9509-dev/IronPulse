import { Trainer, ClassSession, PricingPlan, Testimonial } from './types';

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Alex "The Anvil" Mercer',
    specialty: 'Powerlifting & Strength',
    bio: 'Former competitive powerlifter with a focus on functional strength and injury prevention.',
    image: 'https://picsum.photos/id/1005/400/500',
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    specialty: 'HIIT & Cardio',
    bio: 'Energy unmatched. Sarah will push you past your limits with a smile on her face.',
    image: 'https://picsum.photos/id/338/400/500',
  },
  {
    id: '3',
    name: 'Marcus Chen',
    specialty: 'Yoga & Mobility',
    bio: 'Balancing the yin and yang. Marcus helps athletes recover and build core stability.',
    image: 'https://picsum.photos/id/64/400/500',
  },
];

export const CLASSES: ClassSession[] = [
  { id: 'c1', title: 'Morning Glory HIIT', time: '06:00 AM', duration: '45 min', instructor: 'Sarah Jenkins', intensity: 'High', image: 'https://picsum.photos/id/73/600/400' },
  { id: 'c2', title: 'Iron Strength', time: '07:00 AM', duration: '60 min', instructor: 'Alex Mercer', intensity: 'High', image: 'https://picsum.photos/id/91/600/400' },
  { id: 'c3', title: 'Flow Yoga', time: '08:30 AM', duration: '60 min', instructor: 'Marcus Chen', intensity: 'Low', image: 'https://picsum.photos/id/65/600/400' },
  { id: 'c4', title: 'Lunchtime Crunch', time: '12:00 PM', duration: '30 min', instructor: 'Sarah Jenkins', intensity: 'Medium', image: 'https://picsum.photos/id/177/600/400' },
  { id: 'c5', title: 'Power Hour', time: '05:30 PM', duration: '60 min', instructor: 'Alex Mercer', intensity: 'High', image: 'https://picsum.photos/id/203/600/400' },
  { id: 'c6', title: 'Evening Zen', time: '07:00 PM', duration: '45 min', instructor: 'Marcus Chen', intensity: 'Low', image: 'https://picsum.photos/id/233/600/400' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29,
    features: ['Access to Gym Floor', 'Locker Room Access', '1 Free Guest Pass/Month', 'Free Wi-Fi'],
    isPopular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 59,
    features: ['All Basic Features', 'Unlimited Group Classes', 'Sauna Access', 'Monthly Body Composition Scan'],
    isPopular: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 99,
    features: ['All Pro Features', '2 Personal Training Sessions', 'Priority Booking', 'Exclusive Merch Pack'],
    isPopular: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Jessica M.',
    role: 'Member since 2021',
    quote: "I was intimidated at first, but the community here is incredible. I've lost 30lbs and gained a family.",
    image: 'https://picsum.photos/id/1027/100/100',
  },
  {
    id: 't2',
    name: 'David K.',
    role: 'Pro Athlete',
    quote: "The facilities are top-tier. As a competitive athlete, I need equipment that works as hard as I do.",
    image: 'https://picsum.photos/id/1005/100/100',
  },
];
