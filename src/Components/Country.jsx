
function Country ({ infoCountry }) {
    return (
        <>

        <li key={infoCountry.flag} className="countries">
            <div>{infoCountry.flag}</div>
            <h3>{infoCountry.name.common}</h3>
            <h3>{infoCountry.capital[0]}</h3>
            <h4>{infoCountry.continents[0]}</h4>
        </li>

        </>
    )
};

export default Country;