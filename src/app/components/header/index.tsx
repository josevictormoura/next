'use client'

import Link from 'next/link';
import React from 'react';
import { useAuth } from '@/app/context';
const Header = () => {

  const {isLoggedIn} = useAuth();

  return (
    <header className="p-5 flex justify-between w-full border-b-1 border-white">
      <div>
        <Link href="/">
          <h2 className="text-2xl text-white">Logo</h2>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-2 *:text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/produtos">Produtos</Link>
          </li>
          <li>
            <Link href="/sair">{isLoggedIn ? 'Sair' : 'Login'}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
