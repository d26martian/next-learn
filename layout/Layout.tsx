import { Metadata } from "next";
import React, { ReactNode } from "react";

export interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'React App learning',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>News</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}