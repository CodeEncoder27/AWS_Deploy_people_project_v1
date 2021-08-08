import './App.css';

function App() {
  return (
    <div className="App">
      <h1>People Counter</h1>
    <h2 id="count">0</h2>
    <button id="increments" onclick="countincrement()">Count</button>
    <button id="decrements" onclick="countdecrement()">Decrement</button>
    <button type="submit" id="save-btn" onclick="save()">Save</button>
    <p id="savedvalues">Previous entries: </p>
    <script src="peoplecount.js"></script> 
    </div>
  );
}

export default App;
