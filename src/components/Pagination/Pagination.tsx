import React, { FC } from "react";
import styles from "./Pagination.module.css";

export type PaginationProps = {
  totalCount: number;
  perPage: number;
  page: number;
  prevButtonClick: () => void;
  nextButtonClick: () => void;
};

const Pagination: FC<PaginationProps> = ({
  page,
  perPage,
  totalCount,
  prevButtonClick,
  nextButtonClick,
}) => {
  const isPrevButtonDisabled = page < 2;
  const isNextButtonDisabled = perPage * page === totalCount;

  return (
    <div>
      <button
        className="prev"
        disabled={isPrevButtonDisabled}
        onClick={prevButtonClick}
      >
        НАЗАД
      </button>
      <button
        className="next"
        disabled={isNextButtonDisabled}
        onClick={nextButtonClick}
      >
        ВПЕРЕД
      </button>
    </div>
  );
};

export default Pagination;
