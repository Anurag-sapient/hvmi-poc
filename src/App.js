import axios from "axios";
import React from "react";

const baseURL="http://localhost:8099/posts";;
function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;

  return (
    <div className="App">
      <center>
        {/* <h1>HVMI PROJECT</h1> */}
        <h2>{post[0].title}</h2>
        </center>
    </div>
  );
}

export default App;
