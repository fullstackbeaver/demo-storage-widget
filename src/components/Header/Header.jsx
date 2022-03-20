import "./Header.scss";
import React from "react";
import { StoreContext }       from "../../providers/Store";

const Header = () => {
  const [store] = React.useContext(StoreContext);
  return (
    <header className="top">{store.name === null? "login" : store.name}</header>
  );
};

export default Header;
