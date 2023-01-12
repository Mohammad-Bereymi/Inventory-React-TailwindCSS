const ProductList = ({ products, setProducts }) => {
  const deleteHandler = (productId) => {
    const filteredProducts = products.filter((p) => p.id !== productId);
    setProducts(filteredProducts);
  };
  return (
    <div>
      <h2 className="text-xl text-slate-400 font-bold mb-4">productList</h2>
      <div className="overscroll-x-auto">
        {products.map((product) => (
          <div
            className="flex items-center justify-between mb-8 w-full min-w-[400px]"
            key={product.id}
          >
            <span className="text-slate-400">{product.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-400">
                {new Date(product.createdAt).toLocaleDateString("fa-IR")}
              </span>
              <span className="block text-sm px-3 py-0.5 text-slate-400 border border-slate-500 rounded-2xl">
                {product.category}
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-400">
                {product.quantity}
              </span>
              <button
                className="delete-product border px-3 py-0.5 rounded-2xl border-red-400 text-sm text-red-400"
                onClick={() => deleteHandler(product.id)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
