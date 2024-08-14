
import Image from 'next/image'
import React from 'react'
import DataImages from '../data/data-image'

export default function Footer() {

    const navItem = [
        {id:1, label: "Ujung Tombang"},
        {id:2, label: "Sejarah"},
        {id:3, label: "Pahlawanku"},
        {id:4, label: "Tema"},
        {id:5, label: "Event"},
    ]

  return (
    <main>

    <footer className='w-full bg-[#242424] py-12 px-12'>
    <div className='lg:flex-row flex flex-col justify-between lg:items-center gap-y-8'>
        <div>
            <Image src={DataImages.LogoFooter} className='w-40' alt='logo'/>
        </div>
        <div className='lg:flex-row flex flex-col lg:items-center gap-6'>
        {navItem.map((item) => (
            <div key={item.id}>
            <a className='text-xs text-white'>{item.label}</a>
            </div>
        ))}
        </div>
        <button className='px-4 h-10 rounded-full bg-white text-black text-xs max-w-max font-semibold'>
            Contact
        </button>
    </div>
        <div className='w-full h-[1px] border border-white mt-12'>

        </div>
        <h1 className='text-sm text-white mt-8  lg:text-center text-start'>© 2021 All Rights Reserved</h1>
    </footer>
    </main>
  )
}
