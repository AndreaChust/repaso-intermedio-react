import "../scss/App.scss";
import Header from "./Header";
import ListCountries from "./ListCountries";
import dataCountries from "../services/data.json";
import Filters from "./Filters";
import { useState } from "react";

function App() {
    const [filterCountry, setFilterCountry] = useState("");

    const changeFilter = (inputValue) => {
        setFilterCountry(inputValue)
    }

    const filteredCountries = dataCountries.filter((country) => {
      return country.name.common.includes(filterCountry)
    }
  
  )


  return (
    <>


    <Header />
    <Filters onChangeFilterValue={changeFilter} />
    <ListCountries countries={filteredCountries} />
    </>

  )
}

export default App
