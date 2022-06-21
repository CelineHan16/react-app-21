// import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "./usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users.users);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  // useEffect(function() {
  //   axios.get(
  //     'https://redux1-cb938-default-rtdb.firebaseio.com/users.json').then(({ data }) => {
  //       const newUsers = Object.keys(data).map(id => {
  //         return { id: id, ...data[id] };
  //       })
  //       setUsers(newUsers);
  //     })
  // }, []);

  const output = users.map((user) => <li key={user.id}>{user.name}</li>);

  return <ul className="Users">{output}</ul>;
}