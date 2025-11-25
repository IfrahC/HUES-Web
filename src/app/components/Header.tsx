'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? 'font-bold underline'
      : 'hover:underline hover:font-medium';

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-4 py-2 bg-[#000000] text-white shadow-md">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image
            src="/logo-removebg.png"
            alt="Site Logo"
            width={70}
            height={70}
            className="rounded-full cursor-pointer"
            priority
          />
        </Link>
        <h1 className="text-xl font-semibold">HU Entrepreneurship Society</h1>
      </div>
      <nav className="space-x-4">
        <Link href="/" className={linkClass('/')}>
          Home
        </Link>
        <Link href="/about" className={linkClass('/about')}>
          About
        </Link>
        <Link href="/timeline" className={linkClass('/timeline')}>
          Timeline
        </Link>
        <Link href="/events" className={linkClass('/events')}> {/* Need to make */}
          Events
        </Link>
        <Link href="/register" className={linkClass('/register')}> {/* Need to make */}
          Register
        </Link>
        <Link href="/contact" className={linkClass('/contact')}> {/* Need to make */}
          Contact
        </Link>
      </nav>
    </header>
  );
}
