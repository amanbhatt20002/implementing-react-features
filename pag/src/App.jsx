import { useEffect, useState } from "react";
import Card from "./component/card.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage,setCurrentPage]=useState(0);

  const page_size=10;
  const start=currentPage;
  const end=currentPage+page_size;
  const totalProducts=products.length;
  const totalPages=Math.ceil(totalProducts / page_size);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const json = await data.json();
    setProducts(json.products)
    console.log(json.products);
    
  };
  useEffect(() => 
    {
      fetchData();
    }, []);

    const handleClick=(i)=>{
      setCurrentPage(i*page_size)

    }

  return !products.length?(<h1>no products</h1>): <>

  <h1 className="heading">Pagination</h1>
    <div className="product-container">

    {products.slice(start,end).map((p)=><Card key={p.id} image={p.thumbnail} title={p.title}/>)}

    </div>

   <div className="pagination">
  {[...Array(totalPages)].map((_, i) => (
    <span key={i} className="page_index" onClick={()=>handleClick(i)}>{i + 1}</span>
  ))}
</div>

  
  </>;
}

export default App;
