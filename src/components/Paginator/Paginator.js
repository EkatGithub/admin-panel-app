import React, {useState} from "react";
import styles from './Pagination.module.css';
import Button from "../Button/Button";
import {LEFT_PAGE, RIGHT_PAGE} from "./Pagination.constants";
import {range} from "../../helpers/range";

const Pagination = ({totalRecords, pageLimit, onPageChanged}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNeighbours = 1;
  const totalPages = Math.ceil(totalRecords / pageLimit);

  const gotoPage = (page) => {
    const currentPage = Math.max(0, Math.min(page, totalPages));

    const paginationData = {
      currentPage,
      totalPages,
      pageLimit,
      totalRecords,
    };
    setCurrentPage(currentPage);
    onPageChanged(paginationData);
  };

  const handleClick = (page) => {
    gotoPage(page);
  };

  const handleMoveLeft = () => {
    gotoPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = () => {
    gotoPage(currentPage + pageNeighbours * 2 + 1);
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 1;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  if (!totalRecords) return null;

  if (totalPages === 1) return null;

  const pages = fetchPageNumbers();
  return (
    <ul className={styles.pagination}>
      {pages.map((page, index) => {
        if (page === LEFT_PAGE)
          return (
            <li key={index}>
              <Button size="low" onClick={handleMoveLeft}>...</Button>
            </li>
          );

        if (page === RIGHT_PAGE)
          return (
            <li key={index}>
              <Button size="low" onClick={handleMoveRight}>...</Button>
            </li>
          );

        return (
          <li key={index}>
            <Button
              color={currentPage === page ? 'blue' : ''}
              size="low"
              onClick={() => handleClick(page)}
            >
              {page}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default Pagination;