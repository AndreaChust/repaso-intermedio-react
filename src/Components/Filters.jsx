
function Filters (props) {
    const handleSearch = (ev) => {
        props.onChangeFilterValue(ev.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="Busca tu país favorito" onChange={handleSearch}/>
        </div>
    )
}

export default Filters;