"use client"
import {FaUmbrellaBeach} from 'react-icons/fa'
import {LuHotel} from 'react-icons/lu'
import CategoriesItem from './CategoriesItem'
import { useSearchParams } from 'next/navigation'

export const categories = [
    {
        name:'Tatil koyu',
        icon: FaUmbrellaBeach
    },
    {
        name:'Kamp',
        icon: LuHotel
    },
    {
        name:'Villa',
        icon: FaUmbrellaBeach
    },
    {
        name:'Hotel',
        icon: LuHotel
    },
]

const Categories = () => {
    const params = useSearchParams();
    const urlItem = params?.get('category')
  return (
    <div className='flex items-center gap-7'>
        {
            categories.map((category,i)=>(
                <CategoriesItem
                    key={i}
                    name={category.name}
                    icon={category.icon}
                    selected={urlItem == category.name}
                />
            ))
        }
    </div>
  )
}

export default Categories