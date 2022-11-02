import { useState } from "react"
import { BookCard } from "../components/BookCard";

export const CatalogPage = (props) => {
    const [activeGenre, setActiveGenre] = useState(props.categories[0]);
    return <div className="catalog__wrapper">
        <aside className="genres block-default">
            {
                props.categories.map((category) => <button key={category.id} className={activeGenre.name == category.name ? "genre-item genre-item_active" : "genre-item"} onClick={() => setActiveGenre(category)}>{category.name}</button>)
            }
        </aside>
        <main className="catalog">
            {
                activeGenre.books.map((book) => <BookCard key={book.id} book={book}/>)
            }
        </main>
    </div>
}