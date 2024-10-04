const Header = ({searchQuery, handleSearch}) => {
  return (
    <div className="fixed top-0 w-full bg-[#154c79] px-5 lg:px-10 2xl:px-0">
      <div className="max-w-[1320px] mx-auto py-9 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-4xl font-bold text-white">Country APP</h1>

        <div className="relative w-full md:w-auto">
          <input
            type="search"
            value={searchQuery}
            placeholder="Search country ..."
            name="search"
            onChange={handleSearch}
            className="bg-white px-4 py-3 rounded-lg w-full md:w-80 outline-none"
          />
          <div className="w-[25px] absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-85">
            <svg
              className="w-full"
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#154C79"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
