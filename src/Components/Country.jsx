
function Country ({ infoCountry }) {
    return (
        <>

        <div key="index" className="countries">
            <div>{infoCountry.flag}</div>
            <h3>{infoCountry.name.common}</h3>
            <h3>{infoCountry.capital}</h3>
            <h4>{infoCountry.continents}</h4>
        </div>

        </>
    )
};

export default Country;