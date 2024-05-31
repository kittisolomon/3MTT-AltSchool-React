import { React } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Components from "./pages/Components";
import FormEvents from "./pages/FormEvents";
import MouseEvents from "./pages/MouseEvents";
import ConRendering from "./pages/ConRendering";
import ReactProps from "./pages/ReactProps";
import Hooks from "./pages/Hooks";

const App = () => {
  return (
    <div>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
          <li>
            <Link to="/form-events">Form Events</Link>
          </li>
          <li>
            <Link to="/mouse-events">Mouse Events</Link>
          </li>
          <li>
            <Link to="/con-rendering">Conditional Rendering</Link>
          </li>
          <li>
            <Link to="/props"> Props </Link>
          </li>
          <li>
            <Link to="/hooks"> Hooks </Link>
          </li>
        </ul>
      </nav> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/components" element={<Components />} />
        <Route path="/form-events" element={<FormEvents />} />
        <Route path="/mouse-events" element={<MouseEvents />} />
        <Route path="/con-rendering" element={<ConRendering />} />
        <Route path="/props" element={<ReactProps />} />
        <Route path="/hooks" element={<Hooks />} />
      </Routes>
    </div>
  );
};

export default App;
