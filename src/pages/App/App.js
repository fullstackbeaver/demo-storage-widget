import "./App.css";
import { getData, increment } from "../../services/actions";
import Header                 from "../../components/Header/Header";
import React                  from "react";
import { StoreContext }       from "../../providers/Store";
import logo                   from "./logo.svg";

function App() {

  const [store, updateStore] =  React.useContext(StoreContext);
  const login = () => {
    updateStore({name : "loading"});
    getData();
  };

  return (
    <div className="wrapper">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
      <main className="App">
        <button onClick={login}> login </button>
        <button className="NavButton" onClick={increment}>Vous avez cliqué {store.count} fois</button>
      </main>
    </div>
  );
}

export default App;
