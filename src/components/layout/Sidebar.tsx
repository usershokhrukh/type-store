"use client"

import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top-profile'>
        <img width={30} height={30} className='sidebar__top-pimg' src="" alt="" />
        <p className='sidebar__p-tit'>Lorem, ipsum dolor.</p>
      </div>
      <ul className='sidebar__ul'>
        <li className='sidebar__li'>
          <Link className='sidebar__link' href={"/products"}>Products</Link>
        </li>
        <li className='sidebar__li'>
          <Link className='sidebar__link' href={"/products"}>Auth</Link>
        </li>
        <li className='sidebar__li'>
          <Link className='sidebar__link' href={"/products"}>Cart</Link>
        </li>
        <li className='sidebar__li'>
          <Link className='sidebar__link' href={"/products"}>Users</Link>
        </li>
      </ul>

      <button className='sidebar__exit-b'>Exit</button>
    </div>
  )
}

export default Sidebar