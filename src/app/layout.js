import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Plus_Jakarta_Sans } from "next/font/google";

export const metadata = {
  metadataBase: new URL('https://altairex.site'),

  title: {
    default: 'AltairEx | Shopify & Web Developer | UK, USA, Europe & Pakistan',
    template: '%s | AltairEx'
  },

  description: 'AltairEx is an elite web development agency offering Shopify, WooCommerce & full stack development for clients in the UK, USA, Europe and Pakistan. Affordable rates, world-class quality.',

  keywords: [
    // 🇵🇰 Pakistan
    'web developer Pakistan',
    'Shopify developer Pakistan',
    'WooCommerce developer Lahore',
    'ecommerce website Pakistan',
    'hire web developer Pakistan',
    'full stack developer Pakistan',
    'web development agency Pakistan',
    'web developer Lahore',
    'affordable web developer Pakistan',
    'Next.js developer Pakistan',

    // 🇬🇧 UK
    'Shopify developer UK',
    'hire web developer UK',
    'ecommerce developer UK',
    'web development agency UK',
    'affordable Shopify developer UK',
    'WooCommerce developer UK',
    'web developer London',
    'outsource web development UK',
    'Next.js developer UK',
    'ecommerce website UK',

    // 🇺🇸 USA
    'Shopify developer USA',
    'hire web developer USA',
    'ecommerce developer United States',
    'affordable web developer USA',
    'WooCommerce developer USA',
    'outsource web development USA',
    'Shopify store developer America',
    'full stack developer USA',
    'web development agency USA',
    'Next.js developer USA',

    // 🇪🇺 Europe
    'Shopify developer Europe',
    'web developer Europe',
    'ecommerce developer Europe',
    'affordable web development Europe',
    'WooCommerce developer Europe',
    'outsource web developer Europe',
    'Shopify agency Europe',

    // 🌍 General International
    'hire Shopify developer online',
    'remote web developer',
    'affordable ecommerce development',
    'AltairEx',
    'elite web development agency',
    'outsource Shopify development',
  ],

  alternates: {
    canonical: 'https://altairex.site',
    languages: {
      'en-GB': 'https://altairex.site',
      'en-US': 'https://altairex.site',
      'en-PK': 'https://altairex.site',
      'en': 'https://altairex.site',
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_PK'],
    url: 'https://altairex.site',
    siteName: 'AltairEx',
    title: 'AltairEx | Shopify & Web Developer | UK, USA, Europe & Pakistan',
    description: 'Elite Shopify, WooCommerce & full stack web development for clients in UK, USA, Europe and Pakistan. World-class quality at smart rates.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AltairEx - Elite Web Development Agency',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AltairEx | Shopify & Web Developer | UK, USA, Europe & Pakistan',
    description: 'Elite Shopify, WooCommerce & full stack web development for clients in UK, USA, Europe and Pakistan.',
    images: ['/og-image.png'],
  },

  verification: {
    google: 'add-your-google-search-console-code-here',
  },

  category: 'technology',
};

// ✅ International JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://altairex.site/#organization',
      name: 'AltairEx',
      url: 'https://altairex.site',
      logo: {
        '@type': 'ImageObject',
        url: 'https://altairex.site/logo.png'
      },
      description: 'Elite web development and e-commerce agency serving clients in UK, USA, Europe and Pakistan. Specializing in Shopify, WooCommerce, and full stack development.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        addressCountry: 'PK'
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'Pakistan'
        },
        {
          '@type': 'Country',
          name: 'United Kingdom'
        },
        {
          '@type': 'Country',
          name: 'United States'
        },
        {
          '@type': 'Country',
          name: 'Germany'
        },
        {
          '@type': 'Country',
          name: 'France'
        },
        {
          '@type': 'Country',
          name: 'Canada'
        },
        {
          '@type': 'Country',
          name: 'Australia'
        }
      ],
      serviceType: [
        'Shopify Development',
        'WooCommerce Development',
        'Full Stack Web Development',
        'E-Commerce Development',
        'Next.js Development',
        'Digital Marketing',
        'Web Design'
      ],
      priceRange: '$$',
      telephone: '+92-000-0000000',
      email: 'hello@altairex.site',
      sameAs: [
        'https://github.com/muzammilnaeem',
        'https://www.linkedin.com/in/muzammilnaeem',
        'https://www.upwork.com/freelancers/muzammilnaeem'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Shopify Store Development',
              description: 'Custom Shopify stores built for maximum conversions'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'WooCommerce Development',
              description: 'Custom WooCommerce stores with payment integration'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full Stack Web Development',
              description: 'Modern web applications with React and Next.js'
            }
          }
        ]
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://altairex.site/#website',
      url: 'https://altairex.site',
      name: 'AltairEx',
      description: 'Elite Web & Shopify Development Agency',
      publisher: {
        '@id': 'https://altairex.site/#organization'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://altairex.site/?s={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  ]
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.className}>
      <head>
        {/* Geo Targeting Tags */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore, Pakistan" />
        <meta name="geo.position" content="31.5204;74.3587" />
        <meta name="ICBM" content="31.5204, 74.3587" />

        {/* International Targeting */}
        <meta name="language" content="English" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-aesthetic-bg text-aesthetic-text min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}