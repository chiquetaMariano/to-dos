import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";

import { SignUp, SignIn } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
