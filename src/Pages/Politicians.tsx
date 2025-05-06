import React, { useState, useEffect, useMemo } from 'react';
import PoliticianCard from '../Components/PoliticianCard';
import '../Styles/politiciansStyle.css';

const Politicians = () => {
  const [ politicians, setPoliticians ] = useState([]);
  const [ search, setSearch ] = useState<string>('');

  async function getPolitician() : Promise<void>{
    const response = await fetch('http://localhost:5000/politicians');
    const politicians = await response.json();
    setPoliticians(politicians);
  }

  useEffect(() => {
    getPolitician();
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) : void {
    setSearch(event.target.value);
  }

  const filteredPoliticians = useMemo(() => {
    return politicians.filter((politician:unknown) => {
      if ( 
        politician && typeof politician === "object" && 
        "name" in politician && typeof politician.name === "string" && 
        "biography" in politician && typeof politician.biography === "string"
      ){
        const isInName : boolean = politician.name.toLowerCase().includes(search.toLowerCase());
        const isInBio : boolean = politician.biography.toLowerCase().includes(search.toLowerCase());
        return isInName || isInBio;
      }
      })
  }, [search, politicians]);

  return (
    <div className="flex flex-col justify-center pt-4 px-10">
      <h1 className="text-3xl font-bold text-center">Politici</h1>
      <div className="py-4 text-center">
        <label className="p-3" htmlFor="search-bar">Cerca Politico</label>
        <input 
          type="text"
          className="p-3 border border-gray-300 rounded-md"
          name="search-bar"
          id="search-bar"
          placeholder="inizia a digitare"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {filteredPoliticians.map((politician, index) => (
          <PoliticianCard politician={politician} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Politicians