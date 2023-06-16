import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { TextField } from "@mui/material";
import { searchActions } from "../redux/slices/search";

export default function SearchForm() {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
    dispatch(searchActions.searchProduct(userInput));
  };

  return (
    <div>
      <TextField variant="standard" onChange={onChangeHandler} />
    </div>
  );
}
