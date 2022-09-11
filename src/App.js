import React, { useState } from "react";
import Search from "./components/Search/Search";
import axios from "axios";
import ResultCard from "./components/ResultCard/ResultCard";
import Popup from "./components/Popup/Popup";
import { ListComponent } from "./components/ListComponent/ListComponent";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [state, setState] = useState({
    searchText: "",
    results: [],
    selected: {},
    
  });

  document.onreadystatechange = () => { 
    console.log("document state:"+ document.readyState);
    if (document.readyState === 'complete') {
      console.log("page is loaded");
      listRandomItem();
    }
  }
  const apiurl = "http://www.omdbapi.com/?apikey=79cea0b2";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.searchText)
      .then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, searchText: s };
    });
  };

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  const listRandomItem = () => {
    axios(apiurl + "&s=any&y=2015")
    .then(({ data }) => {
      let results = data.Search;

      setState((prevState) => {
        return { ...prevState, results: results };

        
      });
      
    });
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <ListComponent listRandomItem={listRandomItem} />

        <ResultCard results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
      <ScrollToTop scrollToTop={scrollToTop} />
    </div>
  );
}

export default App;
