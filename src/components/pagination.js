import React from "react";
import { Link } from "gatsby";

const Pagination = ({ numPages, currentPage }) => {
  return (
    <div className='pagination'>
      <ul>
        {Array.from({ length: numPages }).map((_, i) => {
          const toPage = i === 0 ? "" : i + 1;
          return (
            <li key={i}>
              <Link
                style={{
                  fontWeight: currentPage === i + 1 ? "bold" : "normal",
                  textDecoration: currentPage === i + 1 ? "underline" : "none"
                }}
                aria-label={`Go to page ${i + 1}`}
                to={`/all-reviews/${toPage}`}
              >
                {i + 1}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
