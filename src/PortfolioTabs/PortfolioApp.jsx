import React,{useState} from 'react'
import PortfolioContent from './PortfolioContent'
import CategoriesBtn from './CategoriesBtn'
import PorfolioData from './PorfolioData'
import "./style.css"
const allCategories = ['all', ...new Set(PorfolioData.map((porfolioItem) => porfolioItem.category))];
const allIds = [ ...new Set(PorfolioData.map((porfolioItem) => porfolioItem.id))];
const PortfolioApp=()=>{
    
    const [dataItems, setDataItems] = useState(PorfolioData);
    const [categories] = useState(allCategories);
    const [ids ] = useState(allIds);
    const filterItems = (category) => {
        if (category === 'all') {
            setDataItems(PorfolioData)
          return;
        }
        const newItems = PorfolioData.filter((porfolioItem) => porfolioItem.category === category);
        setDataItems(newItems);
      };
      
    return(
        <>
        <section className="sections" id="skills">
                <h1 className="title">Skills</h1>
  
           
            <div className="portfolio-btn">
                <CategoriesBtn
                categories={categories}
                 filterItems={filterItems} />
            </div>
            <div className="portfolio-content">
                <PortfolioContent items={dataItems} ids={ids} />
            </div>
           
            </section>
        </>
    )
}
export default PortfolioApp