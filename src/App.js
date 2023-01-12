import { useState } from "react";
import "./App.css";
import CategoryForm from "./components/Category";
import NavBar from "./components/NavBar";
import PRoductList from "./components/ProductList";
import Productsform from "./components/Products";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-lg mx-auto p-4">
          <CategoryForm categories={categories} setCategories={setCategories} />
          <Productsform
            categories={categories}
            setProducts={setProducts}
            products={products}
          />
          <PRoductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
