import Header from "../Header/Header";
import AllBooks from "../AllBooks/AllBooks";
import { useState } from "react";

const BookSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("");
    const handleSearch = query => {
        setSearchQuery(query);
    };

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    return (
        <main className="my-10 lg:my-14">
            <Header onSearch={handleSearch} onSortChange={handleSortChange}></Header>
            <AllBooks searchQuery={searchQuery} sortOption={sortOption}></AllBooks>
        </main>
    );
};

export default BookSection;