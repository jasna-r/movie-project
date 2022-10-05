import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from "axios";
import { Navbar } from "./components/Navbar/Navbar";
import {WatchList} from "./components/WatchList";
import {Watched} from "./components/Watched";
import {Add} from "./components/Add";
import Search from "./components/Search/Search";
import ResultCard from "./components/ResultCard/ResultCard";
import Popup from "./components/Popup/Popup";
import { ListComponent } from "./components/ListComponent/ListComponent";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
  const [isShow, setIsShow] = React.useState(true);
  const [state, setState] = useState({
    searchText: "",
    results: [],
    selected: {},
  });

  useEffect(() => {
    listRandomItem();
  },[]);

  const apiurl = "http://www.omdbapi.com/?apikey=79cea0b2";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.searchText)
      .then(({ data }) => {
        let results = data.Search;
        
        setIsShow(false);
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
    axios(apiurl + "&i=" + id)
    .then(({ data }) => {
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
    axios(apiurl + "&s=any&y=2020")
    .then(({ data }) => {
      let results = data.Search;

      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
       <Router>
  <Navbar />
    <Routes>
      <Route exact path='/' element={<WatchList/>}>
        
      </Route>

      <Route path='/watched' element={<Watched/>}>
      
      </Route>

      <Route path='/add' element={<Add/>}>
        
      </Route>
    </Routes>


 </Router>
 <br></br>
 <hr></hr>

      <div className="title">
        <h1>Search for a movie...</h1>
      </div>
      
      <main>
        <Search handleInput={handleInput} search={search} />
        
        <ListComponent isShow={isShow}/>


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
