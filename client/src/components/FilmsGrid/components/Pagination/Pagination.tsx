import classNames from 'classnames';
import React from 'react'
import Button from '../../../UI/Button/Button';
import s from './Pagination.module.scss'
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

type PaginationProps = {
    page: number;
    setPage: (page: number) => void;
    pages: number;
    classname?: string;
}

const Pagination: React.FC<PaginationProps> = ({page, setPage, pages, classname}) => {
  	const isFirstPage = page === 1;
	const isLastPage = page === pages;
	return (
		<>
			{pages !== 1 && (
				<div data-testid="pagination" className={classNames(s.pagination, classname)}>
					<Button
						onClick={() => setPage(1)}
						className={classNames(s.btn, s.left)}
						disabled={isFirstPage}
					>
						<FiChevronsLeft />
					</Button>
					<Button
						onClick={() => setPage(page - 1)}
						className={s.btn}
						disabled={isFirstPage}
					>
						<FiChevronLeft />
					</Button>
					<span className={s.value}>
						{page} / {pages}
					</span>
					<Button
						disabled={isLastPage}
						onClick={() => setPage(page + 1)}
						className={s.btn}
					>
						<FiChevronRight />
					</Button>
					<Button
						disabled={isLastPage}
						onClick={() => setPage(Number(pages))}
						className={classNames(s.btn, s.right)}
					>
						<FiChevronsRight />
					</Button>
				</div>
			)}
		</>
	);
}

export default Pagination