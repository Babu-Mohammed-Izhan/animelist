import { Modal } from 'react-bootstrap'


const Animemodal = ({ show, onHide, anime }) => {

    if (anime === undefined) {
        return (<div></div>)
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
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
                <h5>Rank: {anime.rank}</h5>
                <h5>Start Date:  {anime.start_date}</h5>
                <h5>End Date:{anime.end_date === null ? <div>Not Completed</div> : <div>{anime.end_date}</div>}</h5>
                <h5>Members:{anime.members}</h5>
                <h5>Score: {anime.score}</h5>
                <a href={anime.url}>Link to MyAnimeList</a>
            </Modal.Body>
        </Modal>
    )
}

export default Animemodal
