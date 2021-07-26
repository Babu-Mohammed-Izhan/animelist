import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useState } from 'react'
import Animemodal from './Modal'




const Mainpage = ({ animes }) => {

    const [modalShow, setModalShow] = useState(false);
    const [Animeid, setAnimeid] = useState(null);
    const foundanime = animes.find(anime => { return anime.rank === Animeid })

    return (
        <div className="container">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                {animes.map((anime) => (

                    <div className="col cards" key={anime.mal_id} onClick={() => {
                        setAnimeid(anime.rank)
                        setModalShow(true)
                    }}
                        style={{ marginTop: '100px', borderRadius: '30px' }}
                    >
                        <OverlayTrigger
                            key={anime.mal_id}
                            placement='top'
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    {anime.title}
                                </Tooltip>
                            }
                        >
                            <Card className="h-100 bg-dark" style={{ "cursor": "pointer" }} >
                                <Card.Img src={anime.image_url} />
                            </Card>
                        </OverlayTrigger>
                    </div>
                ))
                }
                <Animemodal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    anime={foundanime}
                />
            </div>
        </div >
    )
}

export default Mainpage
