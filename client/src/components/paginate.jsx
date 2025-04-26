import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

const Paginate = ({ itemsPerPage, allProducts }) => {
  // Example items, to simulate fetching from another resources.
  const items = allProducts;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <Product productinfo={item} />
            </div>
          ))}
      </>
    );
  }

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className="flex gap-3 items-center mt-10 "
        pageClassName="border border-gray-500 px-2 cursor-pointer"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeClassName=" bg-black text-white dark:bg-white dark:text-black"
      />
    </>
  );
};

export default Paginate;
