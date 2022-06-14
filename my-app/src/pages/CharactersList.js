import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import "./CharacterList.css"

export default function CharactersList() {

const { data, loading, error } = useCharacters();

    if (loading) return <div>spinner...</div>
    if (error) return <div>something went wrong!...</div>

  return (
    <div className= "CharacterList">
        {data.characters.results.map((character) => {
            return (
                <div>
                    <img src={character.image} alt=""/>
                    <h2>{character.name}</h2>
                </div>
            )
        })}
    </div>
  )
}
