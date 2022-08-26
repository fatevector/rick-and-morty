import { episodes } from "../fakeStorage/episodes";
import Episode from "./episode";
import Pagination from "./pagination";

const EpisodesList = () => {
    const count = episodes.length;
    const pageSize = 8;

    const handlePageChange = (pageIndex) => {
        console.log(pageIndex);
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
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default EpisodesList;
