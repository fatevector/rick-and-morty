import { React, useState } from "react";
import { episodes } from "../fakeStorage/episodes";
import paginate from "../utils/paginate";
import Episode from "./episode";
import GroupList from "./groupList";
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
        <div className="container pt-2">
            <div className="row">
                <div className="col-4">
                    <GroupList />
                </div>
                <div className="col-8">
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
            </div>
        </div>
    );
};

export default EpisodesList;
