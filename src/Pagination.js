import { Pagination } from 'react-bootstrap'
import { useState } from 'react'


const Paginationcomp = ({ handlePagination, active }) => {
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => {
                handlePagination(number)
            }}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )
}

export default Paginationcomp
