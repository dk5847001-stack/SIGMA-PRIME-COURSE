import Title from "./Title.jsx";
import Product from './Product.jsx';
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";
function App() {
 return (
  <div>
    <MsgBox username="Dilkhush Kumar" textColor="red"/>
    <MsgBox username="Roshan Kumar" textColor="green"/>
    <MsgBox username="Amar Kumar" textColor="cyan"/>
    <ProductTab/>
  </div>
 )
}

export default App
