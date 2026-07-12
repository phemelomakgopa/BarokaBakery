# Baroka's Bakery

Baroka's Bakery is a modern React and TypeScript website for showcasing custom celebration cakes, highlighting featured designs, and making it easy for customers to get in touch or place an order through WhatsApp.

## Features
- Beautiful landing page with featured cakes and testimonials
- Cake gallery with category filters
- Contact form for custom cake inquiries
- WhatsApp ordering link for quick customer communication
- Responsive layout for desktop and mobile devices

## Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Supabase
- Lucide React

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Environment Variables

If you want the contact form submissions to work, create a `.env.local` file and add your Supabase values:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure
- `src/pages` contains the main pages such as Home, Gallery, and Contact
- `src/components` contains reusable UI components
- `src/data` stores the cake content and content sections
- `supabase/migrations` contains the database migration for contact submissions

## License
This project is for Baroka's Bakery and is intended for internal use and client-facing presentation.
