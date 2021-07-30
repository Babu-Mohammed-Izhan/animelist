import { Pagination } from 'react-bootstrap'


const Paginationcomp = ({ handlePagination, active }) => {
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => {
                handlePagination(number)
                window.scrollTo(0, 0)
            }}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div className="pagination-container">
            <Pagination style={{ "margin": "0px", "padding": "5rem", "justifyContent": "center" }}>{items}</Pagination>
        </div>
    )
}

export default Paginationcomp
