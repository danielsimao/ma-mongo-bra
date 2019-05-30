import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getItems } from "../actions/itemActions";
import { Store } from "../Store";

const ShoppingList = () => {
  const { state, dispatch } = React.useContext(Store);
  const [items, setItems] = useState(state.items);

  useEffect(() => setItems(state.items), [state.items]);

  return (
    <div>
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter item");
            if (name) {
              dispatch({ type: "ADD_ITEMS", payload: name });
            }
          }}
        >
          Add Item
        </Button>
        {console.log(state)}
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      dispatch({ type: "DELETE_ITEMS", payload: id });
                      // setItem(items.filter(item => item.id !== id));
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    </div>
  );
};

export default ShoppingList;
