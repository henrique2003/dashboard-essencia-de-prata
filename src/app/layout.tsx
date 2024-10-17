import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Dashboard - Essencia de prata',
  description: 'Dashboard - Essencia de prata',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
