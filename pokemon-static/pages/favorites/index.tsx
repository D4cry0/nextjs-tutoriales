import React, { FC, useEffect, useState } from 'react'

import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';
import { FavoritePokemons } from '@/components/pokemon';

interface Props {
    pokemon: string;
}

const Favorites: FC<Props> = () => {
    
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
    
    useEffect(() => {
        setFavoritePokemons( localFavorites.pokemons() );
    }, []);



    return (
        <Layout title='Favoritos'>

            {
                favoritePokemons.length === 0
                    ? ( <NoFavorites />)
                    : ( <FavoritePokemons pokemons={ favoritePokemons } /> )
            }
        </Layout>
    )
}

export default Favorites;