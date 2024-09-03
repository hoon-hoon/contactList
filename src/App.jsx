import "./App.css";
import InputCon from "./components/InputCon";
import ListCon from "./components/ListCon";

function App() {
  return (
    <div className="app">
      <h1>연락처 리스트</h1>
      <div className="main-content">
        <div className="left-area">
          <InputCon />
        </div>
        <div className="right-area">
          <ListCon />
        </div>
      </div>
    </div>
  );
}

export default App;
