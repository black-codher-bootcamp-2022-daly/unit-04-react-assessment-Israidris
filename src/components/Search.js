import React from "react";
import PropTypes from 'prop-types'

function Search(props) {
  const { keyword, setKeyword, searchAPI } = props;

  function handleChange(changeEvent) {
    console.log("Isras event =>", changeEvent);
    changeEvent.preventDefault();
    setKeyword(changeEvent.target.value)
  }

  async function onSubmit(event) {
    event.preventDefault();
    await searchAPI(keyword);
  }

  return (
    <form className="searchBar">
      <p style={{ color: "red" }}>
        <em>{keyword && "Searching for: " + keyword}</em>
      </p>
      
      <input type="text" value={props.keyword} onChange={handleChange}
        id="keyword"
        name="keyword"
        autoFocus="autoFocus"
        placeholder="Search music, movies, tv shows..." />
      <input className="submit-button" type="submit" onClick={(onSubmit) => {onSubmit.preventDefault() 
       searchAPI(keyword)}} />
    </form>
  );
};

    Search.propTypes = {
        keyword: PropTypes.string,
        setKeyword: PropTypes.func,
        searchAPI: PropTypes.func,
};

export default Search; 