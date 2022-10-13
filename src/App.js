import axios from "axios";
import React from "react";

const baseURL="http://localhost:4502/content/hvmi/us/en/home.model.json";
function App() {
  const [post, setPost] = React.useState(null);
  var x;
  React.useEffect(async() => {
    await axios.get(baseURL,{
      auth:{
        username:'admin',
        password:'admin'
      }
    }).then((response) => {
      console.log('response inside',response.data)
      x=response.data
      setPost(response.data);
    }).catch(function (error) {

      console.log("Error message",error)

  })
    ;
    console.log("x",x);
  }, [x]);
  
 
  
  // if (!post) return null;

  return (
    <div className="App">
      <center>
        <h1>HVMI PROJECT</h1>
        {/* <h2>{x.title}</h2> */}
        </center>
    </div>
  );
}

export default App;
