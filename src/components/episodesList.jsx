import { useState } from "react";
import { episodes } from "../fakeStorage/episodes";
import Episode from "./episode";
import Pagination from "./pagination";

const EpisodesList = () => {
    const count = episodes.length;
    const pageSize = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    return (
        <div className="container">
            <div className="row">
                {episodes.map((episode) => (
                    <Episode key={episode.id} {...episode} />
                ))}
            </div>
            <div className="row">
                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default EpisodesList;
