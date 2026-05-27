const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-[400px] border rounded-xl px-4 py-3 outline-none"
    />
  )
}

export default SearchBar