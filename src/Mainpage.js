import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import Animemodal from './Modal'




const Mainpage = ({ animes }) => {

    const [modalShow, setModalShow] = useState(false);
    const [Animeid, setAnimeid] = useState(null);
    const foundanime = animes.find(anime => { return anime.rank === Animeid })

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                {animes.map((anime) => (

                    <div className="col" key={anime.mal_id} onClick={() => {
                        setAnimeid(anime.rank)
                        setModalShow(true)
                    }}
                        style={{ marginTop: '100px', borderRadius: '30px' }}
                    >
                        <Card border="dark" text="white" className="card h-80 overflow-hidden" >
                            <Card.Img variant="top" src={anime.image_url} className="image" />
                        </Card>
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
