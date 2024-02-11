import "./App.css";
import Route from "./Route/Route";
import { Landing } from "./pages/landing/Landing";
import { Play } from "./pages/play/Play";
import { Container } from "./components/Container";
import { useState } from "react";

function App() {
    const [timer,setTimer] = useState<number>(0);
    const [level,setLevel] = useState<string>('')
  return (
    <>
      <Container>
        <Route path="/">
          <Landing  setTimer={setTimer} setLevel={setLevel}/>
        </Route>

        <Route path="/play">
          <Play timer={timer} level={level}/>
        </Route>
      </Container>
    </>
  );
}

export default App;
