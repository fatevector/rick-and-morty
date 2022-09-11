import { React, useState } from "react";
import { episodes } from "../fakeStorage/episodes";
import paginate from "../utils/paginate";
import Episode from "./episode";
import Pagination from "./pagination";

const EpisodesList = () => {
    const count = episodes.length;
    const pageSize = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const episodesSlice = paginate(episodes, currentPage, pageSize);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    return (
        <div className="container">
            <div className="row">
                {episodesSlice.map((episode) => (
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
