import "../scss/App.scss";
import Header from "./Header";
import ListCountries from "./ListCountries";
import dataCountries from "../services/data.json";
import Filters from "./Filters";
import { useState } from "react";

function App() {
    const [filterCountry, setFilterCountry] = useState("");
    const [nameContinent, setNameContinent] = useState("all");

    const changeFilter = (inputValue) => {
        setFilterCountry(inputValue)
    }

    const changeContinent = (valueContinentInput) => {
        setNameContinent(valueContinentInput);
    }

    const filteredCountries = dataCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(filterCountry.toLowerCase())
    }
  
  )

  const fileteredCountriesByContinent = filteredCountries.filter((country)=> {
      return nameContinent === "all" ? true : country.continents[0] === nameContinent;

  })


  return (
    <>


    <Header />
    <Filters onChangeFilterValue={changeFilter} onChangeContinent={changeContinent} />
    <ListCountries countries={fileteredCountriesByContinent} />
    </>

  )
}

export default App
