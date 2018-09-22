import React from 'react'

const SearchBar = ({ searchSentence,
                     selectedTags,
                     removeTag,
                     updateSearch,
                     search }) => {
        return (
            <div className="searchContainer">
                <div className="searchAreaContainer">
                    <SearchContainer
                        searchSentence={searchSentence}
                        selectedTags={selectedTags}
                        removeTag={removeTag}
                        updateSearch={updateSearch} />
                </div>
                <div className="searchButtonContainer">
                    <SearchButton search={search}/>
                </div>
            </div>
        );
}

const SearchContainer = ({ searchSentence,
                           selectedTags,
                           removeTag,
                           updateSearch}) => {                 
        if (selectedTags.length > 0) {
            return (
                <div className="searchTag">
                    {selectedTags.map((tag, index) => (
                        <SearchTag tag={tag} key={"tagsearch-" + index} action={removeTag}/>
                    ))}
                </div>
            );
        } else {
            return (
                <div className="searchInput">
                    <input
                        type="text"
                        className="searchBox"
                        placeholder="Busca un evento"
                        value={searchSentence}
                        onChange={updateSearch} >
                    </input>
                </div>
            );
        }
}

const SearchTag = ({ tag, action }) => {
    return (
        <div className="searchTagItem">
            <a onClick={() => action(tag)}>#{tag}</a>
        </div>
    );
}

const SearchButton = ({ search }) => {
    return (
        <button className="searchButton" onClick={() => search()}>
            Buscar
        </button>
    );
}

export default SearchBar;
