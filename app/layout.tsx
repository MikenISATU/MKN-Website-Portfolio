import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Miles Kenneth Napilan | Portfolio',
  description:
    'Modern portfolio of Miles Kenneth Napilan - full-stack developer, Web3 contributor, outreach specialist, and technical builder.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
