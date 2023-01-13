import { useEffect, useState } from "react";
import "./App.css";
import CategoryForm from "./components/Category";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Productsform from "./components/Products";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = filterSelectedCategory(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };
  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };
  const selectedCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };
  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };
  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort == "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort == "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  const filterSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.category == selectedCategory);
  };

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    if (products.length) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);
  useEffect(() => {
    if (categories.length) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar products={products} />
        <div className="container max-w-lg mx-auto p-4">
          <CategoryForm categories={categories} setCategories={setCategories} />
          <Productsform
            categories={categories}
            setProducts={setProducts}
            products={products}
          />
          <Filter
            sort={sort}
            searchValue={searchValue}
            onSort={sortHandler}
            onSearch={searchHandler}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={selectedCategoryHandler}
          />
          <ProductList products={filteredProducts} setProducts={setProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;
