const Productsform = () => {
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
            name="product-title"
            id="product-title"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
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
            name="product-quantity"
            id="product-quantity"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
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
            name="product-category"
            id="product-category"
            className="bg-transparent text-slate-400 rounded-xl w-full"
          >
            <option class="bg-slate-500 text-slate-400" value="">
              select a category
            </option>
          </select>
        </div>
        <div className="flex items-center justify-center gap-x-5">
          <button
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
          >
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Productsform;
