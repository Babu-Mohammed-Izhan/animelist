import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useState } from "react";
import Animemodal from "./Modal";

const Mainpage = ({ animes }) => {
  const [modalShow, setModalShow] = useState(false);
  const [Animeid, setAnimeid] = useState(null);
  const foundanime = animes.find((anime) => {
    return anime.mal_id === Animeid;
  });

  return (
    <div className="container" id="mainpage">
      <div className="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
        {animes.map((anime) => (
          <div
            className="col cards"
            key={anime.mal_id}
            onClick={() => {
              setAnimeid(anime.mal_id);
              setModalShow(true);
            }}
            style={{ marginTop: "2rem", borderRadius: "30px" }}
          >
            <OverlayTrigger
              key={anime.mal_id}
              placement="bottom"
              overlay={<Tooltip id="tooltip-bottom">{anime.title}</Tooltip>}
            >
              <Card className="h-100 bg-dark" style={{ cursor: "pointer" }}>
                <Card.Img src={anime.image_url} />
              </Card>
            </OverlayTrigger>
          </div>
        ))}
        <Animemodal
          show={modalShow}
          onHide={() => setModalShow(false)}
          anime={foundanime}
        />
      </div>
    </div>
  );
};

export default Mainpage;
