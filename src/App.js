import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
