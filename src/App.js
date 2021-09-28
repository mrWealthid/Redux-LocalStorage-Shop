import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { Switch, Route } from "react-router-dom";
// import About from "./component/About";
// import Home from "./component/Home";
// import Navlinks from "./Navlinks";

// function App() {
//   return (
//     <div className="App">
//       <Navlinks />
//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/About/:name/:game" component={About} />
//       </Switch>
//     </div>
//   );
// }

// export default App;
