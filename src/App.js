
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StoryReel from './components/StoryReel';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className = "app__body">
        <Sidebar/>
        <StoryReel/>
      </div>
    </div>
  );
}

export default App;
