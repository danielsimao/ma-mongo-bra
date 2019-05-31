import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { getItems } from "../actions/itemActions";
import { Store } from "../Store";
import axios from "axios";

const ShoppingList = () => {
  const { state, dispatch } = React.useContext(Store);
  const [items, setItems] = useState([]);

  useEffect(() => setItems(state.items), [state.items]);

  useEffect(() => {
    dispatch({ type: "ITEMS_LOADING" });

    const fetchData = async () => {
      axios
        .get("/api/items")
        .then(res => dispatch({ type: "GET_ITEMS", payload: res.data }));
    };

    fetchData();
  }, [dispatch]);

  const deleteItem = id =>
    axios
      .delete(`/api/items/${id}`)
      .then(res => dispatch({ type: "DELETE_ITEMS", payload: id }));

  return (
    <div>
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {console.log(items)}
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => deleteItem(_id)}
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
