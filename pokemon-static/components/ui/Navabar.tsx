import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Navabar = () => {

    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 40px',
            backgroundColor: theme?.colors.gray100.value,
        }}>
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
                alt="icono de la app"
                width={70}
                height={70}
            />

            <Link href='/'>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okemon</Text>
                </div>
            </Link>

            <Spacer css={{ flex: 1 }}/>
            
            <Link href='/favorites'>
                <Text color='white'>Favoritos</Text>
            </Link>
        </div>
    )
}
