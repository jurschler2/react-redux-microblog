import React from 'react';
import './App.css';
import NavBox from "./NavBox";
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavBox />
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
