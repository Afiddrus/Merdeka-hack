'use client';
import '../styles/nav.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Container from './ui/container';
import DataImages from '../data/data-image';
import navItem from '../data/data-nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleActive = (id) => {
    setActive(id);
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const variants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={`navbar ${scrollPosition > 0 ? 'border-b' : ''} z-20 w-full lg:fixed sm:sticky sticky top-0 bg-white`}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <Container>
        <nav className="flex items-center justify-between lg:py-8 py-4 lg:px-12 sm:px-8 px-4">
          <div>
            <Image src={DataImages.Logo} alt="Logo Nav" width={140} />
          </div>
          <ul className="lg:flex items-center space-x-4 md:hidden sm:hidden hidden">
            {navItem.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => handleActive(item.id)}
                  href={item.href}
                  className={` ${
                    active === item.id ? 'text-black font-semibold' : 'text-neutral-500'
                  } text-xs  font-normal`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <Link href="/mainscreen/contact">
              <button className="btn_contact lg:block hidden">
                <span>Contact</span>
              </button>
            </Link>
            <button onClick={handleToggleMenu} className="lg:hidden md:flex">
              <FontAwesomeIcon
                icon={faBars}
                className={`${showMenu ? 'text-red-600' : ''} text-4xl`}
                width={24}
              />
            </button>
          </div>
        </nav>
      </Container>
      <Container>
        <motion.div
          className={`lg:hidden w-full ${showMenu ? 'px-4 py-2' : 'p-0'} bg-red-600 block transition-all ease-in-out duration-300`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: showMenu ? 'auto' : 0, opacity: showMenu ? 1 : 0 }}
        >
          <ul className={` ${showMenu ? 'flex' : 'h-0'} lg:hidden items-center justify-between `}>
            {navItem.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`${showMenu ? 'block' : 'hidden'} text-sm text-white font-normal`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/mainscreen/contact" className={`${showMenu ? 'block' : 'hidden'} text-sm text-white font-normal`}>
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Navbar;
