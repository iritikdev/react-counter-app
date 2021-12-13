import Counters from "./components/counters";
import NavBar from "./components/NavBar";
import "./styles.css";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </>
  );
}
