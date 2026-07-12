import CakeImage from './Assets/CakeImage.webp';
import CakeImageIi from './Assets/CakeImage_ii.webp';
import CakeImageIii from './Assets/CakeImage_iii.webp';
import CakeImageIv from './Assets/CakeImage_iv.webp';
import CakeImageV from './Assets/CakeImage_v.webp';
import CakeImageVi from './Assets/CakeImage_vi.webp';
import CakeImageVii from './Assets/CakeImage_vii.webp';
import SpiderCake from './Assets/SpiderCake.jpg';
import UnicornCake from './Assets/UnicornCake.jpg';
import DinosaurCake from './Assets/DinasourCake.jpg';
import SuperheroCake from './Assets/SuperheroCake.jpg';

export interface CakeItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
}

export const cakeCategories = [
  'All Cakes',
  'Unicorn',
  'Princess',
  'Superhero',
  'Cartoon',
  'Baby Shower',
  'Celebration',
];

export const cakes: CakeItem[] = [
  {
    id: 1,
    title: 'Mickey Mouse',
    category: 'Mickey Mouse',
    image: CakeImageVi,
    description: 'A dreamy unicorn with pastel mane, gold horn, and rainbow sprinkles.',
    featured: true,
  },
  {
    id: 2,
    title: 'Enchanted Princess Castle',
    category: 'Princess',
    image: CakeImageIii,
    description: 'A towering castle cake with turrets, roses, and royal details.',
    featured: true,
  },
  {
    id: 3,
    title: 'Superhero Action Cake',
    category: 'Superhero',
    image: SpiderCake,
    description: 'Bold colors, comic-style toppers, and action-packed details.',
    featured: true,
  },
  {
    id: 4,
    title: 'Cartoon Character Cake',
    category: 'Cartoon',
    image: CakeImageV,
    description: 'Your child\'s favorite cartoon character brought to life in cake.',
    featured: true,
  },
  {
    id: 5,
    title: 'Plain Cake',
    category: 'Baby Shower',
    image: CakeImageVii,
    description: 'Soft pastel tones with adorable baby-themed decorations.',
    featured: true,
  },
  {
    id: 6,
    title: 'Golden Celebration Cake',
    category: 'Celebration',
    image: CakeImageIi,
    description: 'Elegant gold and white tiers perfect for milestone birthdays.',
    featured: true,
  },
  {
    id: 7,
    title: 'Rainbow Sprinkle Cake',
    category: 'Celebration',
    image: CakeImage,
    description: 'A vibrant rainbow surprise inside, covered in colorful sprinkles.',
  },
  {
    id: 8,
    title: 'Dinosaur Adventure Cake',
    category: 'Cartoon',
    image: DinosaurCake,
    description: 'A prehistoric scene with friendly dinosaurs and jungle details.',
  },
  {
    id: 9,
    title: 'Mermaid Lagoon Cake',
    category: 'Princess',
    image: CakeImageIii,
    description: 'An underwater wonderland with shimmering scales and seashells.',
  },
  {
    id: 10,
    title: 'Superhero Shield Cake',
    category: 'Superhero',
    image: SuperheroCake,
    description: 'A bold shield design with the hero\'s emblem front and center.',
  },
  {
    id: 11,
    title: 'Unicorn Rainbow Cake',
    category: 'Unicorn',
    image: UnicornCake,
    description: 'A whimsical unicorn with cascading rainbow mane and glitter.',
  },
  {
    id: 12,
    title: 'Baby Booties Cake',
    category: 'Baby Shower',
    image: CakeImageVi,
    description: 'Adorable baby booties with soft lace details and pastel bows.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Thandiwe M.',
    location: 'Soweto',
    text: 'Baroka made my daughter\'s 5th birthday unforgettable. The unicorn cake was absolutely stunning and tasted even better than it looked!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lerato K.',
    location: 'Sandton',
    text: 'I was nervous ordering online, but the whole process was so easy. The princess castle cake exceeded all my expectations. My little girl was over the moon!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sipho N.',
    location: 'Tembisa',
    text: 'The superhero cake for my son\'s party was the talk of the school. Incredible detail and so delicious. Baroka truly cares about every cake.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'How far in advance should I order?',
    answer: 'I recommend placing your order at least 1–2 weeks in advance, especially for custom designs. For larger or more detailed cakes, 2–3 weeks ensures I can give your creation the love and attention it deserves.',
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Yes! I deliver across Johannesburg and surrounding areas for a small fee based on distance. You\'re also welcome to collect your cake directly from the bakery.',
  },
  {
    question: 'Can you accommodate allergies or dietary needs?',
    answer: 'Absolutely. I offer egg-free, dairy-free, and gluten-free options. Just let me know the details when you order, and I\'ll make sure every child can enjoy their special cake safely.',
  },
  {
    question: 'What flavors are available?',
    answer: 'I offer a variety of flavors including vanilla, chocolate, red velvet, lemon, and carrot cake. Fillings range from buttercream to cream cheese and chocolate ganache.',
  },
];
