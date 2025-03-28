import Country from "./Country";

function ListCountries ({ countries }) {
    
    return (
        <>
            <ul className="container">
                {
                    countries.map((country) => {
                        return <Country infoCountry={country} />
                    })
                }
            </ul>
        
        
        </>
    )
};

export default ListCountries;