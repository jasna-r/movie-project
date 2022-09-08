import React, { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from "./components/Search/Search";
import axios from "axios";
import ResultCard from "./components/ResultCard/ResultCard";
import Popup from "./components/Popup/Popup";
// import { Header } from "./components/Header/Header";
// import { WatchList } from "./components/WatchList";
// import { Watched } from "./components/Watched";
// import { Add } from "./components/Add";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=79cea0b2";

  const search = (e) => {
    if(e.key === "Enter") {
      axios(apiurl + "&s=" + state.s)
      .then(({ data }) => {
        let results= data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i" + id)
    .then(({data}) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      {/* <Router>
  <Header />
    <Routes>
      <Route exact path='/' element={<WatchList/>}>
        
      </Route>

      <Route path='/watched' element={<Watched/>}>
      
      </Route>

      <Route path='/add' element={<Add/>}>
        
      </Route>
    </Routes>


 </Router> */}
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search= {search} />

        <ResultCard results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} 
        closePopup={closePopup} /> :false}
      </main>
    </div>
  );
}

export default App;
