import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: 'Projects | Web & Shopify Portfolio | UK USA Europe Pakistan',
  description: 'Explore AltairEx portfolio of Shopify stores, web applications and AI projects delivered for clients in UK, USA, Europe and Pakistan.',
  alternates: { canonical: 'https://altairex.site/projects' },
  openGraph: {
    url: 'https://altairex.site/projects',
    title: 'Projects Portfolio | AltairEx',
    description: 'Web development and Shopify portfolio for UK, USA, Europe and Pakistan.',
    images: [{ url: '/og-image.png' }],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}