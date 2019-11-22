import React from 'react';
import{ Provider } from "react-redux";
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

import HeroData from "./HeroData";

import "./index.css";
import "./App.css";

const store = createStore(reducer, applyMiddleware(thunk));

// https://superheroapi.com/api/access-token/character-id/powerstats

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My Super Cool API</h1>
        <HeroData />
      </div>
    </Provider>
  );
} 

export default App;


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);