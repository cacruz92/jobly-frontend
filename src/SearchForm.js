import React, {useState} from "react";
import JoblyApi from "./api";


const SearchForm = ({onSearch, category}) => {
    const [searchTerm, setSearchTerm] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Searching for ${category} with term: ${searchTerm}`);
        onSearch(searchTerm, category)
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchTerm" placeholder={`Search ${category}...`} value={searchTerm} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;