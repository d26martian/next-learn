import { FunctionComponent, JSX } from "react";
import { Metadata } from "next";

import { LayoutProps } from './Layout.props'
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";

import styles from './Layout.module.css'


export const metadata: Metadata = {
  title: 'React App learning',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>
        {children}
      </div>
      <Footer className={styles.footer} />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <RootLayout>
        <Component {...props} />
      </RootLayout>
    )
  }
}