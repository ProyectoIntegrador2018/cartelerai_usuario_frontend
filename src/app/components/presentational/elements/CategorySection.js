import React from 'react'

const CategorySection = ({ categoriesList, selectCategory }) => {
    return (
        <div className="tagContainer">
            {categoriesList.map((category, index) => (
                <CategoryItem
                    category={category}
                    key={"category-" + index}
                    selectCategory={selectCategory} />
            ))}
        </div>
    );
}

const CategoryItem = ({ category, selectCategory }) => {
    return (
            <div className="tagItem">
                <button onClick={() => selectCategory(category)} >
                    {category}
                </button>
            </div>
    );
}

export default CategorySection;
