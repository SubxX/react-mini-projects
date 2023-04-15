import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { PAGE_SIZE } from "../constants/ecommerce.constatnts";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  total: number;
  currentPage: number;
};

const Pagination = ({ total, currentPage }: Props) => {
  const navigate = useNavigate();
  const pages = useMemo(
    () => Array.from(new Array(Math.ceil(total / PAGE_SIZE)), (_, i) => i + 1),
    [total]
  );

  const navigateToPage = (page: number) => {
    navigate(page === 1 ? "/ecommerce" : `/ecommerce?page=${page}`);
  };

  const onPaginationNextPrev = (type: "prev" | "next") => {
    const nextPage = type === "next" ? currentPage + 1 : currentPage - 1;
    if (pages.indexOf(nextPage) < 0) {
      console.warn(`No page found with : ${nextPage}`);
      return;
    }
    navigateToPage(nextPage);
  };

  if (!pages.length) return null;

  return (
    <div className="mt-5 flex gap-2 flex-wrap justify-center">
      <button
        className="icon-btn btn-default disabled:!opacity-50"
        onClick={onPaginationNextPrev.bind(this, "prev")}
        disabled={pages[0] === currentPage}
      >
        <BsChevronLeft size={18} />
      </button>
      {pages.map((page) => (
        <button
          key={`pagination-${page}`}
          className="icon-btn btn-default !p-2 w-[44px] disabled:!opacity-50"
          disabled={page === currentPage}
          onClick={navigateToPage.bind(this, page)}
        >
          {page}
        </button>
      ))}
      <button
        className="icon-btn btn-default disabled:!opacity-50"
        onClick={onPaginationNextPrev.bind(this, "next")}
        disabled={pages[pages.length - 1] === currentPage}
      >
        <BsChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
