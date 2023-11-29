import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
        

<footer className="bg-white rounded-lg shadow m-1 dark:bg-gray-950">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-white">© 2023 <a href="/" className="hover:underline">AgriMitra</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link  className="hover:underline me-4 md:me-6">Privacy Policy</Link>
        </li>
        <li>
            <Link  className="hover:underline me-4 md:me-6">Licensing</Link>
        </li>
        <li>
            <Link to='/contact' className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
}


export default Footer;
