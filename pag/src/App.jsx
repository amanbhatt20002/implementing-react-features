import { useEffect, useState } from "react";
import Card from "./component/card.jsx";

function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products)
    console.log(json.products);
    
  };
  useEffect(() => 
    {
      fetchData();
    }, []);

  return !products.length?(<h1>no products</h1>): <>
    <div className="product-container">
      
    {products.map((p)=><Card key={p.id} image={p.thumbnail} title={p.title}/>)}

    </div>
  
  </>;
}

export default App;
