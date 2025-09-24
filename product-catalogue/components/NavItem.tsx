import { NavLinksProps } from '@/interfaces'
import Link from 'next/link'
import React from 'react'
interface NavItemProps {
  link: NavLinksProps
}

const NavItem = ({ link }: NavItemProps) => {
  return (
    <li className="hover:text-cyan-300 ">
      <Link href={link.href}>{link.title}</Link>
    </li>
  )
}

export default NavItem
