import './globals.css';

export const metadata = {
  metadataBase: new URL('https://ph-areia-britas-transportes.vercel.app'),
  title: 'PH Areia e Britas Transportes | Areia, Brita e Entrega em Uberlândia',
  description:
    'PH Areia e Britas Transportes em Uberlândia. Areia, britas e transporte com entrega rápida. Rua Vaticano 460. Atendimento de segunda a sábado.',
  keywords: [
    'areia em Uberlândia',
    'brita em Uberlândia',
    'areia e brita Uberlândia',
    'transporte de areia Uberlândia',
    'entrega de brita Uberlândia',
    'material de construção Uberlândia',
    'PH Areia e Britas Transportes',
  ],
  authors: [{ name: 'PH Areia e Britas Transportes' }],
  creator: 'Kinkajou Dev',
  openGraph: {
    title: 'PH Areia e Britas Transportes | Areia, Brita e Entrega em Uberlândia',
    description: 'Areia, britas e transporte com atendimento profissional em Uberlândia. Solicite orçamento pelo WhatsApp.',
    url: 'https://ph-areia-britas-transportes.vercel.app',
    siteName: 'PH Areia e Britas Transportes',
    images: [{ url: '/assets/og-ph-areia-britas.png', width: 1200, height: 630, alt: 'PH Areia e Britas Transportes' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PH Areia e Britas Transportes',
    description: 'Areia, britas e transporte em Uberlândia.',
    images: ['/assets/og-ph-areia-britas.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#09090b" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.tailwind = window.tailwind || {};
              window.tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      phRed: '#d80000',
                      phDark: '#09090b',
                      phCard: '#131313',
                      phGold: '#facc15'
                    },
                    boxShadow: {
                      redGlow: '0 0 45px rgba(216,0,0,.28)'
                    }
                  }
                }
              }
            `,
          }}
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
