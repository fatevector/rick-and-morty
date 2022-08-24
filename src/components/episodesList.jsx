import { episodes } from "../fakeStorage/episodes";

const EpisodesList = () => {
    return (
        <div className="container">
            <div className="row">
                {episodes.map((episode) => (
                    <div
                        key={episode.id}
                        style={{ height: "200px" }}
                        className="col-3"
                    >
                        {episode.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EpisodesList;
