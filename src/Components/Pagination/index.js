import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

export default function PaginationComponent({
  totalCount,
  pageSize,
  currentPage,
  handlePageChange,
}) {
  console.log(1);
  return (
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={pageSize}
      totalItemsCount={totalCount}
      pageRangeDisplayed={pageSize}
      onChange={handlePageChange}
    />
  );
}
Pagination.propTypes = {
  totalItemsCount: PropTypes.number,
};

PaginationComponent.propTypes = {
  totalCount: PropTypes.number,
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  handlePageChange: PropTypes.func,
};

PaginationComponent.defaultProps = {
  totalCount: 1,
  pageSize: 1,
  currentPage: 1,
  handlePageChange: () => {},
};
