
// import './styles.css';
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Classes from "./Components/Classes";
import Experienced from "./Components/Experienced";
import Courses from './Components/Courses';
import Feedback from './Components/Feedback';
import Community from "./Components/Community";
import Questions from './Components/Questions';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Classes/>
      <Experienced/>
      <Courses/>
      <Feedback/>
      <Community/>
      <Questions/>
      <Footer/>
    
    </div>
  );
}

export default App;
