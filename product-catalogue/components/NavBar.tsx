'use client'

import { NavLinksProps } from '@/interfaces'
import NavItem from './NavItem'
import { HamburgerMenu } from 'iconsax-reactjs'
import { useState } from 'react'

const NavLinks: NavLinksProps[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Products',
    href: '/products',
  },
  {
    title: 'Carts',
    href: '/carts',
  },
]

export const NavBar = () => {
  const [open, setIsOpen] = useState(false)
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center justify-between gap-4 px-6 py-3 text-white bg-[#121212]/40 backdrop-blur-md border-2 border-white/20 rounded-full w-3/4 mx-auto mt-4 ">
        <h1 className="font-bold text-lg text-[#1A1C1E]">Logo</h1>
        <ul className="hidden  md:flex gap-6 cursor-pointer text-[#1A1C1E]">
          {NavLinks.map(link => (
            <NavItem key={link.href} link={link} />
          ))}
        </ul>
        <div className="relative md:hidden">
          {/* Hamburger button */}
          <HamburgerMenu
            size={32}
            color="#1A1C1E"
            className="cursor-pointer "
            onClick={() => setIsOpen(prev => !prev)}
          />

          {/* Dropdown card */}
          {open && (
            <div className="absolute right-0 top-12 w-30 bg-white text-center rounded-lg shadow-lg border border-gray-200 px-5 py-4">
              <ul className="flex flex-col gap-4 text-[#1A1C1E]">
                {NavLinks.map(link => (
                  <NavItem key={link.href} link={link} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
