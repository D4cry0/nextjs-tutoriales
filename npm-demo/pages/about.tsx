import Link from 'next/link';
import React from 'react';
import { MainLayout } from '../components/layouts/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
        <div className='description'>
          <p>
            Comienza&nbsp;
            <code className='code'>pages/about.js</code>
          </p>
          <div>
            Ir al <Link href={'/'}>Main</Link>
          </div>
        </div>
    </MainLayout>

  )
}