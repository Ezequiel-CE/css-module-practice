import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ type, onAddUser }) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (user.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values)",
      });
      return;
    }
    if (Number(age) < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (age > 0)",
      });
      return;
    }
    onAddUser(user, age);
    setUser("");
    setAge("");
  };

  const userHandler = (e) => {
    setUser(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="user">User</label>
          <input id="user" type="text" onChange={userHandler} value={user} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" onChange={ageHandler} value={age} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
