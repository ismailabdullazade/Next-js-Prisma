"use client"

import Categories from "./Categories"
import Logo from "./Logo"
import UserMenu from "./UserMenu"


const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 bg-gray-100 px-7">
        <Logo/>
        <Categories/>
        <UserMenu/>
    </div>
  )
}

export default Navbar