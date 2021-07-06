import React from 'react'

const CategoriesBtn = ({ categories, filterItems }) => {
  return (
        <>
        <ul className="ul-btn">

        </ul>
      <div className="portfolio-btn-container">
        {categories.map((category, index) => {
          return (
            <>
              <li
                
                className="portfolio-filter-btn"
                key={index}
                onClick={() => filterItems(category)}
              >
                {category}
              </li>
              </>
        );
      })}
    </div>
        </>
    )
}
export default CategoriesBtn