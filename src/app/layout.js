import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import { Navbar } from '../components/Navbar'; // Adjust path if you put components in src/components
import { Footer } from '../components/Footer'; // Create a new Footer component

// You can define metadata here for SEO
export const metadata = {
  title: 'Contracte Juridice',
  description: 'Platformă online care oferă modele de contracte juridice.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <head>
        {/* Tailwind CSS CDN - For quick preview in immersive environment.
            In a real Next.js project, Tailwind is built into the CSS. */}
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Google Fonts for 'Inter' - if you still want it as a fallback */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-gray-100">
        <AuthProvider>
          {/* Navbar will be client component */}
          <Navbar />
          {/* Removed p-6 from main. Content components like HeroSection manage their own internal padding. */}
          <main className="flex-grow flex flex-col">
            {children} {/* This will render the specific page content */}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}