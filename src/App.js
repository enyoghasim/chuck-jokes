import Footer from "./components/footer";
import Header from "./components/header";
import "./App.scss";

function App(props) {
  return (
    <div className="App">
      <Header />
      <section className="hero-section">
        <h2>The Jokes Bible</h2>
        <h4>Daily Laughs for you and yours</h4>
        <div className="input-wrapper">
          <input type="text" placeholder="How can we make you laugh today?" />
        </div>
      </section>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default App;
