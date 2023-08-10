"use client"
import {GiHamburgerMenu} from 'react-icons/gi'
import Image from 'next/image'

const UserMenu = () => {
  return (
    <div className='relative flex items-center gap-2 cursor-pointer'>
        <GiHamburgerMenu size={25} />
        <Image
            src={"https://cdn-icons-png.flaticon.com/512/1077/1077114.png"}
            alt=''
            width={40}
            height={40}
        />
    </div>
  )
}

export default UserMenu