import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Wallpapers App',
  description: 'A gallery of beautiful wallpapers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}