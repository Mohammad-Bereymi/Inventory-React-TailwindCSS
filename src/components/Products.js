import { useState } from "react";

const Productsform = ({ categories, setProducts, products }) => {
  const [productsFormData, setProductsFormData] = useState({
    title: "",
    quantity: 0,
    category: "",
  });
  const addNewProductHandler = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        ...productsFormData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setProductsFormData({ title: "", quantity: 0, category: "" });
  };
  const changeHandler = ({ target }) => {
    setProductsFormData({ ...productsFormData, [target.name]: target.value });
  };
  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            title
          </label>
          <input
            type="text"
            name="title"
            id="product-title"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
            value={productsFormData.title}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400"
          >
            quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="product-quantity"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
            value={productsFormData.quantity}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            category
          </label>
          <select
            name="category"
            id="category"
            className="bg-transparent text-slate-400 rounded-xl w-full"
            value={productsFormData.category}
            onChange={changeHandler}
          >
            <option class="bg-slate-500 text-slate-400" value="">
              select a category
            </option>
            {categories.map((category) => (
              <option
                key={category.id}
                class="bg-slate-500 text-slate-400"
                value={category.title}
              >
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center gap-x-5">
          <button
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
            onClick={addNewProductHandler}
          >
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Productsform;
