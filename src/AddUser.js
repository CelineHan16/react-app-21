import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./usersSlice";

export default function AddUser() {
  const dispatch = useDispatch();

  function onAddUser(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    dispatch(addUser(data.get("name")));

    axios.post(
      'https://redux1-cb938-default-rtdb.firebaseio.com/users.json', 
      Object.fromEntries(data.entries())
    );
  }

  return (
    <form onSubmit={onAddUser}>
      <input type="text" name="name" />
      <button>Add</button>
    </form>
  );
}