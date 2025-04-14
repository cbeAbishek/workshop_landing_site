import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '2 day Workshop',
  description:
    'Join our 2-day workshop on Digital Transformation through Big Data & Cloud Computing. Learn to harness technology for business growth.',
  keywords: ['Big Data', 'Cloud Computing', 'Workshop', 'Digital Transformation'],
  authors: [{ name: 'Your Name', url: 'https://workshop-landing-site.vercel.app/' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Digital Transformation Workshop',
    description:
      'Join our 2-day workshop on Digital Transformation through Big Data & Cloud Computing.',
    url: 'https://workshop-landing-site.vercel.app/',
    siteName: 'Digital Transformation Workshop',
    images: [
      {
        url: 'https://raw.githubusercontent.com/cbeAbishek/workshop_landing_site/refs/heads/main/public/meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Workshop Thumbnail',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Transformation Workshop',
    description:
      'Join our 2-day workshop on Digital Transformation through Big Data & Cloud Computing.',
    images: ['https://raw.githubusercontent.com/cbeAbishek/workshop_landing_site/refs/heads/main/public/meta.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}