import EBusinessClient from "./EBusinessClient";

export const metadata = {
  title: 'E-Business Solutions | Shopify & WooCommerce | UK USA Pakistan',
  description: 'AltairEx delivers complete e-business solutions including Shopify stores, WooCommerce development and digital strategy for clients in UK, USA, Europe and Pakistan.',
  alternates: {
    canonical: 'https://altairex.site/e-business'
  },
  openGraph: {
    url: 'https://altairex.site/e-business',
    title: 'E-Business Solutions | AltairEx',
    description: 'Complete e-business solutions for UK, USA, Europe and Pakistan.',
    images: [{ url: '/og-image.png' }],
  },
};

export default function EBusinessPage() {
  return <EBusinessClient />;
}