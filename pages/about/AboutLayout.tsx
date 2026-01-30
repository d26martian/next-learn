import { Metadata } from "next";
import React, { ReactNode } from "react";

export interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'React App learning',
  description: 'Web site created with Next.js.',
}

export default function AboutLayout({ children }: RootLayoutProps) {
  return (
    <div style={{ "border": "1px solid red" }}>
      {children}
    </div>
  )
}