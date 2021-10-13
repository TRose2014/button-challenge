// import Button from './button/button'
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button variant="secondary" size="lg">Secondary</Button>

      <Button variant="outline-primary">Primary</Button>

      <Button variant="outline-danger">Danger</Button>

      <Button variant="danger">Danger</Button>
    </div>
  );
}

export default App;
