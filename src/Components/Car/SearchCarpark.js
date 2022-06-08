import React, { useState } from "react";



const SearchCarpark = () => {
    const handleChange = (e) => {
        SearchCarpark(e.target.value);
    };

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     const fetchData = async () => {

    //     }
    // }

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
