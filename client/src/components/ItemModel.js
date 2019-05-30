import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import uuid from "uuid";
import { Store } from "../Store";

const ItemModel = () => {
  const [modal, toggleModal] = React.useState(false);
  const [name, setName] = React.useState("");
  const { dispatch } = React.useContext(Store);

  const onSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      ...name
    };

    dispatch({ type: "ADD_ITEMS", payload: newItem });
    toggleModal(!modal);
  };

  return (
    <div>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={() => toggleModal(!modal)}
      >
        Add Item
      </Button>
      <Modal isOpen={modal} toggle={() => toggleModal(!modal)}>
        <ModalHeader toggle={() => toggleModal(!modal)}>
          Add To Shopping List
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            {" "}
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add shopping item"
                onChange={e => setName({ [e.target.name]: e.target.value })}
              />
              <Button
                color="dark"
                style={{ marginTop: "2rem", display: "block" }}
              >
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModel;
