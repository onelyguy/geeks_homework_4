import Button from "./Button";
import Component from "./Component";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div>
      <h1>
        <Header/>
        Welcome
        <Component/>
        <Button button={'Нажми на меня'}/>
        <Footer/>
      </h1>
    </div>
  );
}

export default App;
