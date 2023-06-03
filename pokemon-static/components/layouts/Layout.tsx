import React, { FC, ReactNode } from 'react'

import Head from 'next/head'
import { Navabar } from '../ui/Navabar';
// Este sirve para definir los headers, metatags y otras configuraciones para los componentes

interface Props {
    children: ReactNode;
    title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title}) => {
    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App'}</title>
                <meta name='author' content='Arnulfo' />
                <meta name='description' content={`Informacion sobre el pokemon ${ title }`}/>
                <meta name='keywords' content={`${ title }, pokemon, pokedex`}/>
                
                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Es es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`}/>
            </Head>

            <Navabar />

            <main style={{
               padding: '8px 20px', height: 'calc(100vh - 70px)', overflowY: 'auto',
            }}>
                { children }
            </main>
        </>
    )
}
