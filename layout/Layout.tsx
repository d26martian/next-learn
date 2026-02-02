import { Metadata } from "next";
import { LayoutProps } from './Layout.props'
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";


export const metadata: Metadata = {
  title: 'React App learning',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  )
}