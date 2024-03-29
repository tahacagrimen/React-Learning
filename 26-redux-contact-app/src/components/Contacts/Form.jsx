import React, { useState } from "react";

import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

    setName("");
    setNumber("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
