
import './App.css';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Link from './components/Link/Link';
import Img from './components/Img/Img.js';
function App() {
  return (
  <div>
    <Header></Header>
     
    
    <div>
    <Paragraph></Paragraph>
    </div>
    <Img></Img>
  

    
    <Link url="https://liquipedia.net/" linktext="Click here for more info on Esports schedules"></Link><br></br>
    
  </div>
  );
}

export default App;
