import React, { useEffect, useState } from 'react';

const AboutPage = () => {
    const [pageData, setPageData] = useState(undefined);
    const [pokemon, setPokemon] = useState({
        name: '',
    });
    const {name} = pokemon;

    const getPokemon =  (pokeName) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(res => res.json())
        .then(data => {
            console.log('debuggo:', data);
            setPageData(data);
        });
    };
    const onChange = (e) => {
        setPokemon({...pokemon, [e.target.name]: e.target.value});
        
    };
    const onBlur = (e) => {
        getPokemon(pokemon.name);
        console.log('debug', pokemon)
    };
    const onSubmit = (e) => {
        e.preventDefault();
        getPokemon(pokemon.name);
    }
    // useEffect(() => {
    //     getPokemon('ditto');
    // },[]); 

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Who's that pokemon?</label>
                <input id='name' type="text" placeholder="name" name="name" value={name} onChange={onChange} onBlur={onBlur}/>
            </form>
            {pageData && <img src={`${pageData?.sprites?.front_default}`} alt={`${pageData?.name}`}/>}
            
        </div>
    )
}

export default AboutPage;
