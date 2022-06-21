import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "./AddUser";
import { loadAlbums } from "./albumsSlice";
import { loadPhotos } from "./photosSlice";
import { loadPosts } from "./postsSlice";
import { loadTodos } from "./todosSlice";
import Users from "./Users";
import { loadUsers } from "./usersSlice";

function App() {
  const dispatch = useDispatch();
  // const users = useSelector(store => store.users.users);
  const posts = useSelector(store => store.posts.posts);
  const albums = useSelector(store => store.albums.albums);
  const photos = useSelector(store => store.photos.photos);
  const todos = useSelector(store => store.todos.todos);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  useEffect(() => {
    dispatch(loadPosts());
  }, []);
  useEffect(() => {
    dispatch(loadAlbums());
  }, []);
  useEffect(() => {
    dispatch(loadPhotos());
  }, []);
  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  // const outputUsers = users.map(user => <li key={user.id}>{user.name}</li>);
  const outputAlbums = albums.slice(0, 15).map(album => <li key={album.id}>{album.title}</li>);
  const outputPosts = posts.slice(0, 15).map(post => 
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>);
  const outputPhotos = photos.slice(0, 40).map(photo => <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />);
  const outputTodos = todos.slice(0, 15).map(todo => <li key={todo.id}>{todo.title}</li>);
  
  return (
    <div className="App">
      <Users />

      <AddUser />
      {/* <ul>
        {outputUsers}
      </ul> */}
      <div>
        {outputPosts}
      </div>
      <ul>
        {outputAlbums}
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {outputPhotos}
      </div>
      <ul>
        {outputTodos}
      </ul>
    </div>
  );
}

export default App;
