import Header from "../Header/Header";
import AllBooks from "../AllBooks/AllBooks";
import { useState } from "react";

const BookSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = query => {
        setSearchQuery(query);
    };

    return (
        <main className="my-10 lg:my-14">
            <Header onSearch={handleSearch}></Header>
            <AllBooks searchQuery={searchQuery}></AllBooks>
        </main>
    );
};

export default BookSection;