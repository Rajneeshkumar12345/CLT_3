import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'HOME',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'ABOUT US',
    path: '/About',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'SERVICES',
    path: '/Service',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'TECHNOLOGY',
    path: '/Technology',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'PROJECTS',
    path: '/Projects',
    icon: <AiIcons.AiFillProject />,
    cName: 'nav-text'
  },
  {
    title: 'REASERCH',
    path: '/Reaserch',
    icon: <AiIcons.AiFillRead />,
    cName: 'nav-text'
  },
  {
    title: 'PRODUCTS',
    path: '/Products',
    icon: <MdIcons.MdProductionQuantityLimits />,
    cName: 'nav-text'
  },
  {
    title: 'CONTACT US',
    path: '/Contact',
    icon: <AiIcons.AiFillContacts />,
    cName: 'nav-text'
  }
 ];