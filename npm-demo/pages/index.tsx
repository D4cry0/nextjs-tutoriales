import Link from 'next/link'
import React from 'react';
import { MainLayout } from '../components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className='description'>
        <p>
          Comienza&nbsp;
          <code className='code'>pages/index.js</code>
        </p>
        <div>
          Ir al <Link href={"/about"}>About</Link>
        </div>
      </div>
    </MainLayout>
  )
}
