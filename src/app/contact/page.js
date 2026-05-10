import ContactClient from "./ContactClient";

export const metadata = {
  title: 'Contact | Hire Web Developer UK USA Europe Pakistan',
  description: 'Contact AltairEx to hire an expert Shopify or web developer. Serving clients in UK, USA, Europe and Pakistan with fast delivery and affordable rates.',
  alternates: {
    canonical: 'https://altairex.site/contact'
  },
  openGraph: {
    url: 'https://altairex.site/contact',
    title: 'Contact AltairEx | Hire a Web Developer',
    description: 'Get in touch with AltairEx for Shopify, web development and AI solutions.',
    images: [{ url: '/og-image.png' }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}