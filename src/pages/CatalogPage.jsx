import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Books } from "../components/Books";
import { loadCategories } from "../store/categories/loadCategories";
import { selectCategories, selectIsCategoriesLoaded } from "../store/categories/selectors";

export const CatalogPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCategories);
    }, []);

    const categories = useSelector((state) => selectCategories(state));
    const [activeGenre, setActiveGenre] = useState(0);

    if (categories.length == 0) {
        return;
    }

    return <div className="catalog__wrapper">
        <aside className="genres block-default">
            {
                categories.map((category, index) => 
                <button 
                    key={category.id} 
                    className={categories[activeGenre].name == category.name ? "genre-item genre-item_active" : "genre-item"} 
                    onClick={() => setActiveGenre(index)}>
                        {category.name}
                </button>)
            }
        </aside>
        <Books activeId={categories[activeGenre].id}/>
    </div>
}