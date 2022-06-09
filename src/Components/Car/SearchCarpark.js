import React from "react";



const SearchCarpark = () => {
    const handleChange = (e) => {
        SearchCarpark(e.target.value);
    };

    return (
        <div>
        <form>
            <input 
                type="text" 
                placeholder="Enter Location"
                onChange={handleChange}
            />
            <button>Search</button>
        </form>
        </div>
    )
}

export default SearchCarpark;
