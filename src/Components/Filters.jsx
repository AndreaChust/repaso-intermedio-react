
function Filters (props) {
    const handleSearch = (ev) => {
        props.onChangeFilterValue(ev.target.value);
    }
    const handleChange = (ev) => {
        props.onChangeContinent(ev.target.value);
    }
    return (
        <div>
            <fieldset>
            <label htmlFor="nameCountry">Filtro por país: </label>
            <input className="input" id="nameCountry" type="text" placeholder="Busca tu país favorito" onChange={handleSearch}/>
            </fieldset>
            <fieldset>
                <label htmlFor="continent">Por continente</label>
                <select name="" id="continent" onClick={handleChange}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antartica">Antartica</option>

                </select>
            </fieldset>
        </div>
    )
}

export default Filters;