import '@/styles/globals.css';
import type { ReactNode } from 'react';

export const dynamic = 'force-dynamic';

/**
 * Root layout component.
 *
 * This component wraps every page in the application.  It sets the language
 * attribute to Arabic and the direction to RTL, and applies a basic font.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className="h-full">
      <body className="min-h-full bg-primary text-white font-sans">
        {children}
      </body>
    </html>
  );
}
