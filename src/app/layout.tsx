import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Unikart App',
  description: 'Campus shopping app for university students',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
