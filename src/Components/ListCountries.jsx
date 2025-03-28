import Country from "./Country";

function ListCountries ({ countries }) {
    
    return (
        <>
            <div className="cointaner">
                {
                    countries.map((country) => {
                        return <Country infoCountry={country} />
                    })
                }
            </div>
        
        
        </>
    )
};

export default ListCountries;