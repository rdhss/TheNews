import { Search } from '@mui/icons-material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const navigate = useNavigate()
    const [searchName, setSearchName] = useState()

    const onSearch = () => {
        navigate(`/search/${searchName}`)
    }

    return (
        <form  class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="Search..." onChange={(e) => setSearchName(e?.target?.value)}/>
                    <button onClick={onSearch} type="submit" class="searchButton">
                        <Search color='primary'></Search>
                    </button>
            </div>
        </form>
    )
}

export default SearchBar