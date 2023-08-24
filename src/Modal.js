import { Modal } from "react-bootstrap";

const Animemodal = ({ show, onHide, anime }) => {
  if (anime === undefined) {
    return <div></div>;
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      onClick={() => onHide()}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {anime.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card-body card-grid ">
          <div className="left-side">
            <img
              className="left-side-img"
              src={anime.images.jpg.large_image_url}
              alt="anime-poster"
            />
          </div>
          <div className="right-side">
            <h3>MAL-ID: {anime.mal_id}</h3>
            <h3>{anime.rank ? `Rank: ${anime.rank}` : ""}</h3>
            <h3>
              Start Date:{""} {anime.aired.from.split("T")[0]}
            </h3>
            <h3 className="end-date">
              {`End Date: ${""} ${
                anime.aired.to === null
                  ? "Still Airing"
                  : anime.aired.to.split("T")[0]
              }`}
            </h3>
            <h3>Members:{anime.members}</h3>
            <h3>Score: {anime.score}</h3>
            <a href={anime.url}>Link to MyAnimeList</a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Animemodal;
