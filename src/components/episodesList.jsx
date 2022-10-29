import { React, useState, useEffect } from "react";
import { fetchAll, fetchYears } from "../fakeApi/episodesApi";
import paginate from "../utils/paginate";
import Episode from "./episode";
import GroupList from "./groupList";
import Pagination from "./pagination";

const EpisodesList = () => {
    const [episodes, setEpisodes] = useState([]);
    const [years, setYears] = useState([]);
    const [filter, setFilter] = useState();
    const count = episodes.length;
    const pageSize = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const episodesSlice = paginate(episodes, currentPage, pageSize);

    const getEpisodes = year => {
        fetchAll(year).then(response => setEpisodes(response));
    };

    useEffect(() => {
        getEpisodes(filter);
        setCurrentPage(1);
    }, [filter]);

    useEffect(() => {
        fetchYears().then(response => setYears(response));
    }, []);

    const handlePageChange = pageIndex => {
        setCurrentPage(pageIndex);
    };

    const handleFilterChange = filter => {
        setFilter(filter);
    };

    const handleReset = () => {
        setFilter();
        setCurrentPage(1);
    };

    return (
        <div className="container pt-2">
            <div className="row">
                <div className="col-4">
                    {!!years.length && (
                        <>
                            <GroupList
                                items={years}
                                filter={filter}
                                onChangeFilter={handleFilterChange}
                            />
                            <hr />
                            <div className="d-grid">
                                <button
                                    onClick={handleReset}
                                    className="btn btn-m btn-primary"
                                >
                                    Очистить
                                </button>
                            </div>
                        </>
                    )}
                </div>
                <div className="col-8">
                    <div className="row">
                        {episodesSlice.map(episode => (
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
