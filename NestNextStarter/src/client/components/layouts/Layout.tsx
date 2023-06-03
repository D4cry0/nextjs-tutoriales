import React, { FC, ReactNode } from 'react'

import Head from 'next/head'
// Este sirve para definir los headers, metatags y otras configuraciones para los componentes

interface Props {
    children: ReactNode;
    title?: string;
}

export const Layout: FC<Props> = ({ children, title}) => {
    return (
        <>
            <Head>
                <title>{ title }</title>
            </Head>

            <main style={{
               padding: '8px 20px', height: 'calc(100vh - 70px)', overflowY: 'auto',
            }}>
                { children }
            </main>
        </>
    )
}
