const PRoductList = ({ products }) => {
  return (
    <div>
      <h2>productList</h2>
      {products.map((product) => (
        <div
          className="flex items-center justify-between mb-8"
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
            <button className="delete-product border px-3 py-0.5 rounded-2xl border-red-400 text-sm text-red-400">
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PRoductList;
