import Button from "./components/Button/Button";
import Component from "./components/Component/Component";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
const navList = ["Главная", "О нас", "Контакты"]

  return (
    <div>
      <h1>
        <Header navbar={navList}/>
        Welcome
        <Component/>
        <Button>
          <p style={{
            color: "green",
            fontSize: "20px"
          }}>
            Button
          </p>
        </Button>
        {/* <Button button={'Нажми на меня'}/>
        <Button button={'ОК'}/>
        <Button button={'Отмена'}/> */}
      </h1>
      <Footer description={'link'}/>
    </div>
  );
}

export default App;
