import { useState } from "react";

const Filter = ({
  onSort,
  onSearch,
  sort,
  searchValue,
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <label
          htmlFor="search-input"
          className="text-slate-500 text-xl font-bold"
        >
          Search
        </label>
        <input
          type="text"
          name="search-input"
          id="search-input"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-500"
          value={searchValue}
          onChange={onSearch}
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <label
          htmlFor="sort-products"
          className="text-slate-500 text-xl font-bold"
        >
          Sort
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
          value={sort}
          onChange={onSort}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            select a category
          </option>
          <option className="bg-slate-500 text-slate-300" value="latest">
            latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            earliest
          </option>
        </select>
      </div>

      <div className="flex items-center justify-between mb-6">
        <label
          htmlFor="sort-products"
          className="text-slate-500 text-xl font-bold"
        >
          Category
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400 rounded-xl"
          value={selectedCategory}
          onChange={onSelectCategory}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            All
          </option>
          {categories.map((category) => (
            <option
              className="bg-slate-500 text-slate-300"
              key={category.title}
              value={category.title}
            >
              {category.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
