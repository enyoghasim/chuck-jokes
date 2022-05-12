import "./App.scss";
import Footer from "./components/footer";
import Header from "./components/header";

function App(props) {
  return (
    <div className="App">
      <Header />
      <section className="hero-section"></section>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default App;
