// 'use client';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';

// export default function Header() {
//   const pathname = usePathname();

//   const linkClass = (path: string) =>
//     pathname === path
//       ? 'font-bold underline'
//       : 'hover:underline hover:font-medium';

//   return (
//     <header className="sticky top-0 z-50 flex justify-between items-center px-4 py-2 bg-[#000000] text-white shadow-md">
//       <div className="flex items-center space-x-3">
//         <Link href="/">
//           <Image
//             src="/logo-removebg.png"
//             alt="Site Logo"
//             width={70}
//             height={70}
//             className="rounded-full cursor-pointer"
//             priority
//           />
//         </Link>
//         <h1 className="text-xl font-semibold">HU Launchpad</h1>
//       </div>
//       <nav className="space-x-4">
//         <Link href="/" className={linkClass('/')}>
//           Home
//         </Link>
//         <Link href="/about" className={linkClass('/about')}>
//           About
//         </Link>
//         <Link href="/timeline" className={linkClass('/timeline')}>
//           Timeline
//         </Link>
//         {/* <Link href="/events" className={linkClass('/events')}>
//           Events
//         </Link> */}
//         <Link href="/register" className={linkClass('/register')}>
//           Register
//         </Link>
//         <Link href="/contact" className={linkClass('/contact')}>
//           Contact
//         </Link>
//       </nav>
//     </header>
//   );
// }

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    pathname === path
      ? 'font-semibold underline'
      : 'hover:underline';

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo-removebg.png"
              alt="HU Launchpad Logo"
              width={44}
              height={44}
              priority
            />
          </Link>
          <span className="text-lg font-semibold whitespace-nowrap">
            HU Launchpad
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className={linkClass('/')}>Home</Link>
          <Link href="/about" className={linkClass('/about')}>About</Link>
          <Link href="/timeline" className={linkClass('/timeline')}>Timeline</Link>
          <Link href="/register" className={linkClass('/register')}>Register</Link>
          <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-4 pb-4">
          <nav className="flex flex-col gap-3 text-sm">
            <Link onClick={() => setOpen(false)} href="/" className={linkClass('/')}>Home</Link>
            <Link onClick={() => setOpen(false)} href="/about" className={linkClass('/about')}>About</Link>
            <Link onClick={() => setOpen(false)} href="/timeline" className={linkClass('/timeline')}>Timeline</Link>
            <Link onClick={() => setOpen(false)} href="/register" className={linkClass('/register')}>Register</Link>
            <Link onClick={() => setOpen(false)} href="/contact" className={linkClass('/contact')}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
