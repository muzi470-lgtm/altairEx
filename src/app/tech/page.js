import TechClient from "./TechClient";

export const metadata = {
  title: 'Tech Stack | Next.js React & Shopify Experts | AltairEx',
  description: 'AltairEx uses Next.js, React, Shopify, WooCommerce and AI to build world-class digital solutions for clients in UK, USA, Europe and Pakistan.',
  alternates: { canonical: 'https://altairex.site/tech' },
  openGraph: {
    url: 'https://altairex.site/tech',
    title: 'Tech Stack | AltairEx',
    description: 'Next.js, React, Shopify and AI technology for world-class web development.',
    images: [{ url: '/og-image.png' }],
  },
};

export default function TechPage() {
  return <TechClient />;
}