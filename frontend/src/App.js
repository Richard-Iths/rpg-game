
import "./app.scss";
import { Home } from './components/pages/home/home.component.jsx'
import { Header } from './components/header/header.component' //Bygg
import { Footer } from './components/footer/footer.component' //Bygg

function App() {
  return (
  <div>
    <Header />
    <Home />
    <Footer />
  </div>
  )
}

export default App;
