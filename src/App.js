import axios from "axios";
import {useState,useEffect} from "react";

const baseURL="http://localhost:4502/content/hvmi/us/en/home.model.json";
function App() {
  const [post, setPost] = useState([]);
//   useEffect(async() => {
//     await axios.get(baseURL,{
//       auth:{
//         username:'admin',
//         password:'admin'
//       }
//     }).then((response) => {
//       console.log('response inside',response.data)
//       setPost(response.data);
//     }).catch(function (error) {
      
//       console.log("Error message",error)
//   });
//   }, []);
  
  // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await axios.get(baseURL,{
      auth:{
        username:'admin',
        password:'admin'
      }});
      const prod=res.data;
      if(prod)setPost(prod);
      console.log('data from axiois :',res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
    if(post)console.log('data after setting using setPost :',post);
  }, []);
  
  
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
