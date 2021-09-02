import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Pokemon', 'Sakura'];
    const [categories, setCategories] = useState(['Pokemon']);
    // const handleAdd = () =>{
    //     setCategories(['Star Wars', ...categories]);
    // }
    return (
        <div>
            <h2>Buscador de gifs</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>
        </div>
    )
}
