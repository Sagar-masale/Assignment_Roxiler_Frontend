const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <div className="flex items-center gap-3 mt-8">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-4 py-2 border rounded-lg"
      >
        Prev
      </button>

      <p>
        {currentPage} / {totalPages}
      </p>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-4 py-2 border rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
