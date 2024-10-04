const Modal = ({ selectedCountry, close }) => {
  
  const mainCurrency = Object.entries(selectedCountry.currencies || {}).length > 0 
  ? Object.entries(selectedCountry.currencies).map(currency => {
      const [currCode, { name, symbol }] = currency;
      return <span key={currCode}>{name} ({symbol})</span>;
    })
  : <span>No currency found.</span>;


  return (
    <div id="parent" className="modal-bg" onClick={close}>
      <div onClick={(e) => e.stopPropagation()} className="modal-body">
        {/* Modal Header */}
        <div className="modal-header">
          <h1 className="text-white text-3xl font-bold">
            {selectedCountry?.name?.common}
          </h1>
          <p className="text-right hidden md:block">A Country From {' '}{selectedCountry.region}</p>
        </div>

        {/* Modal Body */}
        <div className="p-10 flex gap-10 items-start md:items-center flex-col md:flex-row">
          {/* Country Flag */}
          <div className="w-[220px]">
            <img
              className="rounded-md ring-[1px]"
              src={selectedCountry?.flags?.svg}
              alt={selectedCountry?.flags?.alt}
            />
          </div>

          {/* Modal Info */}
          <div>
            <p className="mb-[6px]"><span className="font-bold">Official Name:</span>{" "} {selectedCountry?.name?.official}</p>

            <p className="mb-[6px]"><span className="font-bold">Capital:</span>{" "} {selectedCountry?.capital ? selectedCountry?.capital : "Not Available"}</p>

            <p className="mb-[6px]"><span className="font-bold">Population:</span>{" "}{selectedCountry?.population?.toLocaleString()}</p>

            <p className="mb-[6px]"><span className="font-bold">Currency:</span>{' '}{mainCurrency}</p>
            
            <p className="mb-[6px]"><span className="font-bold">TimeZone: </span>{" "} {selectedCountry?.timezones}</p>
          </div>
        </div>

        {/* Modal Close Button */}
        <div className="absolute top-[-60px] right-[-60px] animate-bounce animate-infinite">
          <button
            onClick={close}
            className="size-12 font-semibold text-[18px] text-[#0594BC] bg-white rounded-full hover:bg-slate-300"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
