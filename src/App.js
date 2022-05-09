import './App.css';
import RaffleReveal from './routes/raffleReveal/raffleRevealView'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={
            <RaffleReveal  />
          }/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
