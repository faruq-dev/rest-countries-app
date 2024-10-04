import { useState } from "react";

const CountryCard = ({ country, click }) => {
  let [btnStatus, setBtnStatus] = useState("View Details");

  const handleClick = () => {
    setBtnStatus("Visited");
    click();
  };
  

  return (
    <div className="bg-white p-5 rounded-xl h-full flex flex-col justify-between shadow-2xl shadow-blue-500/20">
      {/* Flag Img Div */}
      <div className="mb-3">
        <img
          className="rounded-md ring-[1px]"
          src={country?.flags?.svg}
          alt={country?.flags?.alt}
        />
      </div>

      {/* Info Area */}
      <div className="mb-4">
        <h1 className="text-[18px]">
          <span className="font-bold">Country:</span> {country.name.common}
        </h1>

        <h1 className="text-[18px]">
          <span className="font-bold">Capital:</span>{" "}
          {country.capital ? country.capital : "No Capital Found"}
        </h1>

        <h1 className="text-[18px] hidden md:block">
          <span className="font-bold">Population:</span> {country.population}
        </h1>

        <h1 className="text-[18px] hidden md:block">
          <span className="font-bold">Region:</span> {country.region}
        </h1>
      </div>

      {/* Button */}
      <div className="mt-auto">
        <button
          className={`${
            btnStatus === "Visited" ? "card-btn-visited" : "card-btn"
          } `}
          onClick={handleClick}
          disabled={btnStatus === "Visited"}
        >
          {" "}
          {btnStatus === "Visited" ? "Visited" : "View Details"}{" "}
        </button>
      </div>
    </div>
  );
};

export default CountryCard;
