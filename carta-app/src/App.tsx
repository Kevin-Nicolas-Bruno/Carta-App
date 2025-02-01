import Header from "./components/Header";
import { Card } from "./components/Card.tsx";

function App() {
  return (
    <>
      {Header()}
      <Card
        title="Combo Flash"
        text="Pizza libre de 4 porciones, consultar variedad"
        price="$12800 por persona"
        imgURL="https://www.clarin.com/img/2020/07/13/x4053dL7q_1256x620__1.jpg"
      ></Card>
      <Card
        title="Combo Pizza Libre"
        text="Empanada, Pizza libre de 4 porciones, Postre"
        price="$12800 por persona"
        imgURL="https://paulacasero.com.ar/wp-content/uploads/2021/07/paulacasero-225-600x401.jpg"
      ></Card>
      <Card
        title="Combo Flash"
        text="Pizza libre de 4 porciones, consultar variedad"
        price="$12800 por persona"
        imgURL="https://www.clarin.com/img/2020/07/13/x4053dL7q_1256x620__1.jpg"
      ></Card>
      <Card
        title="Combo Pizza Libre"
        text="Empanada, Pizza libre de 4 porciones, Postre"
        price="$12800 por persona"
        imgURL="https://paulacasero.com.ar/wp-content/uploads/2021/07/paulacasero-225-600x401.jpg"
      ></Card>
      <Card
        title="Combo Flash"
        text="Pizza libre de 4 porciones, consultar variedad"
        price="$12800 por persona"
        imgURL="https://www.clarin.com/img/2020/07/13/x4053dL7q_1256x620__1.jpg"
      ></Card>
      <Card
        title="Combo Pizza Libre"
        text="Empanada, Pizza libre de 4 porciones, Postre"
        price="$12800 por persona"
        imgURL="https://paulacasero.com.ar/wp-content/uploads/2021/07/paulacasero-225-600x401.jpg"
      ></Card>
    </>
  );
}
export default App;
