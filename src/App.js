import './App.css';
import Posts from './components/Posts';
function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
            className="app__headerImg"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram"
            />
      </div>
      <h1>Welcome to Spacestagram!<span role="img" aria-label='rocket'>🚀</span></h1>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
}

export default App;