import ServicesClient from "./ServicesClient";

export const metadata = {
  title: 'Services | Shopify, Web & AI Development | UK USA Europe Pakistan',
  description: 'AltairEx offers Shopify development, WooCommerce stores, AI automation, mobile apps, UI/UX design and full stack web development for clients in UK, USA, Europe and Pakistan. Affordable rates, world-class quality.',
  keywords: [
    // Services specific
    'Shopify development services',
    'WooCommerce development agency',
    'AI automation services',
    'mobile app development Pakistan',
    'UI UX design agency',
    'web development services UK',
    'ecommerce development USA',
    'digital marketing agency Pakistan',
    'API development services',
    'cloud devops services',
    'cybersecurity services Pakistan',
    // International
    'hire Shopify developer UK',
    'web development agency USA',
    'affordable web development Europe',
    'best web developer Pakistan',
    'AI chatbot development',
    'custom web application development',
  ],
  alternates: {
    canonical: 'https://altairex.site/services',
    languages: {
      'en-GB': 'https://altairex.site/services',
      'en-US': 'https://altairex.site/services',
      'en-PK': 'https://altairex.site/services',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://altairex.site/services',
    title: 'Services | Shopify, Web & AI Development | AltairEx',
    description: 'Explore AltairEx services: Shopify, WooCommerce, AI automation, mobile apps and full stack development for UK, USA, Europe and Pakistan.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AltairEx Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | AltairEx',
    description: 'Shopify, WooCommerce, AI & full stack development for UK, USA, Europe and Pakistan.',
    images: ['/og-image.png'],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}