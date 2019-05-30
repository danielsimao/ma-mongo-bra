import React from "react";
import AppNavBar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModel";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
    </div>
  );
}

export default App;
