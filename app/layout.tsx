import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KUNDALINI — Kuncen Digdaya di Segala Lini',
  description: 'Pusat kolaborasi dan ketangguhan Kampung Kuncen untuk warga, pengurus kampung, Jaga Warga, dan KTB Kuncen.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id-ID">
      <body>{children}</body>
    </html>
  );
}
