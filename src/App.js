import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router> 
      <div className="App" style={{ overflow: 'hidden' }}>
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
