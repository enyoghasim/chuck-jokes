import "./App.scss";

function App(props) {
  return (
    <div className="App">
      <header>header</header>
      <main>{props.children}</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
