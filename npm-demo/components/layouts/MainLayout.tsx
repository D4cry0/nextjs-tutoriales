import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';
import { NavBar } from '../NavBar';
import styles from './MainLayout.module.css';


export const MainLayout: FC <PropsWithChildren> = ({children}) => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="About pagina" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />

            <main className={styles.main}>
                { children }
            </main>
        </>
    )
}
