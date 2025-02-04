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
        imgURL="https://paulacasero.com.ar/wp-content/uploads/2021/07/paulacasero-225-600x401.jpg"
      ></Card>
      <Card
        title="Combo Milanesa"
        text="Empanada + milanesa napolitana con fritas + Postre Chapeaux"
        price="$16400 por persona"
        imgURL="https://i.pinimg.com/736x/9d/10/eb/9d10ebdfc474e6d12ce53591a2274450.jpg"
      ></Card>
      <Card
        title="Combo Pollo"
        text="Empanada + Pollo al verdeo + Postre Chapeaux"
        price="$16500 por persona"
        imgURL="https://statics.guiadecocinafacil.com/2011/06/crop/eb07d2d0ffed14fa6b57e1df77a44b7f__1050x560.webp"
      ></Card>
      <Card
        title="Combo Bondiola"
        text="Empanada + Bondiola + Postre"
        price="$18200 por persona"
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
