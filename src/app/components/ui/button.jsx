'use client'
import React, { createContext } from 'react';
 import { motion } from 'framer-motion';
export default function Button( {
    name
}) {
  return (
    <motion.div
     className='px-6 h-10 rounded-full flex items-center justify-center  bg-[#FF2323] max-w-max font-semibold text-white mt-6'
     whileHover={{ scale: 1.1 }}
     transition={{ type: "spring", stiffness: 400, damping: 10 }}
     
    >
     {name}
    </motion.div>
  )
}
