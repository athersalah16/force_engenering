import React from "react";
type Props = {
  categoris: string[];
  handleSelectedCategoryChange: (category: string) => void;
  selectedCategory: string;
};
function DisplayCategories({
  categoris,
  handleSelectedCategoryChange,
  selectedCategory,
}: Props) {
  return (
    <div className="hidden w-full md:flex flex-wrap flex-col lg:flex-row gap-2">
      {categoris.map((category, index) => (
        <div
          key={index + 1}
          onClick={() => handleSelectedCategoryChange(category)}
          className={`${category.toLowerCase() === selectedCategory ? "bg-blue-600 text-white" : ""} border border-gray-200 rounded-full hover:bg-blue-600 hover:text-white px-4 py-2 hover:cursor-pointer duration-300 transition-colors`}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default DisplayCategories;
