import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider></ThemeContextProvider>
    </div>
  );
}

export default App;
