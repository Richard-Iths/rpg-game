import "./app.scss";
import { Home } from "./components/pages/home/home.component.jsx";
import { Game } from "./components/pages/game/game.component.jsx";
import { Header } from "./components/header/header.component"; //Bygg
import { Footer } from "./components/footer/footer.component"; //Bygg
import PlayGame from "./components/pages/playGame/playGame.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game" exact>
            <Game />
          </Route>
          <Route path="/play" exact>
            <PlayGame />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
