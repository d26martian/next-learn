import { JSX } from "react"
import { FooterProps } from "./Footer.props"
import { format } from 'date-fns'
import cn from 'classnames'

import styles from './Footer.module.css'


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>D26tech © 2025 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank">Пользовательское соглашение</a>
      <a href="#" target="_blank">Политика конфиденцальности</a>
    </footer>
  )
}