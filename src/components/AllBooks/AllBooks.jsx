/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";

const AllBooks = ({ searchQuery, sortOption }) => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch("books.json")
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedBooks = [...filteredBooks];
    if (sortOption === "name_asc") {
        sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "name_desc") {
        sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
    }
    return (
        <div
            className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
            {/* <!-- Book Item --> */}
            {/* Display Books */}
            {/* {filteredBooks.map(book => (
                <SingleBook key={book.id} book={book} />
            ))} */}

            {sortedBooks.map(book => (
                <SingleBook key={book.id} book={book} />
            ))}
        </div>
    );
};

export default AllBooks;