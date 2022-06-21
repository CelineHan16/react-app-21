import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./postsSlice";
import { loadUsers } from "./usersSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users.users);
  const posts = useSelector(store => store.posts.posts);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const output = users.map(user => <li key={user.id}>{user.name}</li>)
  const output2 = posts.map(post => 
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>)
  
  return (
    <div className="App">
      <ul>
        {output}
      </ul>
      <div>
        {output2}
      </div>
    </div>
  );
}

export default App;
