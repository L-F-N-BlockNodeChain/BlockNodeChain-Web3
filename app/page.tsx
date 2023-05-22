import Image from 'next/image';
import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

export default function Home() {
  return (
    <body className='bg-black'>
    <main>
      {/* for the network button */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 sm:bottom-20 sm:w-1/2">
        <div className="grid gap-1 items-start justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-700 to-white-100 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt animate-pulse" style={{ animationDuration: '1s' }}></div>
            <Link href="/network">
              <button className="relative px-2 py-2 bg-black rounded-lg leading-none flex items-center ">
              <div className="relative w-8 h-8 animate-spin" style={{ animationDuration: '2s' }}>
  <Image
    src="/whitesvg.svg"
    alt="Logo"
    width={70}
    height={70}
    className="absolute top-0 left-0"
  />
  <Image
    src="/svg.svg"
    alt="Logo"
    width={70}
    height={70}
    className="absolute top-1 left-0"
  />
</div>
                <h1 className="font-mono text-base pl-6 text-violet-400 group-hover:text-gray-100 transition duration-500">
                  Block Node Chain Network &rarr;
                </h1>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* For the logo */}
      <div className="flex justify-center">
        <a className="fixed flex items-center top-7 left-5" href="https://www.linkedin.com/company/lfnbnc">
          <Image src="/svg.svg" alt="logo" width={60} height={50} />
        </a>
        <div className="fixed flex top-6 left-5">
          <Image src="/whitesvg.svg" alt="Logo" width={60} height={50} />
        </div>
      </div>
    </main>
    </body>
  );
}
