import { JSX } from "react"
import cn from 'classnames'
import { SidebarProps } from "./Sidebar.props"

import styles from './P.module.css'


export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      Sidebar
    </div>
  )
}