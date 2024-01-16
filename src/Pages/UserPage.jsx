import { useParams, Outlet, Link} from "react-router-dom"

export default function UserPage() {

  const { username } = useParams ()
  // return <h1>User ID: {username}</h1>

  return (
    <div>
      <h1>User Page</h1>
      <nav>
        <hr />
        <Link to={`users/${username}/posts`}>posts</Link>
        <Link to={`users/${username}/likes`}>likes</Link>
      </nav>
      <Outlet />
    </div>
  );
}
