import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
    //const categories = 
    const [categories, setCategories] = useState(['One Punch', 'Samurai', 'Dragon Ball'])

    /*const handleAdd = () => {
        setCategories([...categories, 'Naruto']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>
            <button>Agregar</button>
            <ol>
                {
                    categories.map(cat => <li key={cat} >{cat}</li>)
                }
            </ol>
        </>
    )
}