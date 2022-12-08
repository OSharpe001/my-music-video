/*TO GET THE ENTIRE PACKAGE'S FUNCTIONALITY, USE THE 
FOLLOWING IMPORT:
import ReactPlayer from "react-player";
*/

import ReactPlayer from 'react-player/youtube';
//import GoingHome from "./assets/videos/GoingHome";
import './App.css';

function App() {
  const vidUrl = "https://www.youtube.com/watch?v=YpJlB711JFo";

  return (
    <div className="App">
      <h1>Hope you enjoy...</h1>
      <ReactPlayer 
        url = {vidUrl}
        playing = {false}
        volume = {0.5}
         />
    </div>
  );
};

export default App;