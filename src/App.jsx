import "./App.css";
import InputCon from "./components/InputCon";

function App() {
  return (
    <div className="app">
      <h1>연락처 리스트</h1>
      <div className="main-content">
        <div className="left-area">
          <InputCon />
        </div>
        <div className="right-area">
          <p>오른쪽 영역.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
