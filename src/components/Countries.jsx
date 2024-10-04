import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Modal from "./Modal";
import SortButtons from "./SortButtons";
import Header from "./Header";
import Footer from "./Footer";

const Countries = () => {
  let [countries, setCountry] = useState([]);
  let [selectedCountry, setSelectedCountry] = useState(null);
  let [sortOrder, setSortOrder] = useState("Low to High");
  let [searchQuery, setSearchQuery] = useState("");
  let [filteredCountries, setFilteredCountries] = useState([]);
  //  ****************************************************************

  useEffect(() => {
    const fetchFunc = async function () {
      const fetchData = await fetch("https://restcountries.com/v3.1/all");
      const data = await fetchData.json();
      const filteredData = data.filter((country) => {
        return (
          country.name.common !== "India" &&
          country.region !== "Europe" &&
          country.subregion !== "North America" &&
          country.name.common !== "Israel"
        );
      });
      // console.log(filteredData);
      setCountry(filteredData);
      setFilteredCountries(filteredData);
    };
    fetchFunc();
  }, []);


  //Debounce
  useEffect(()=>{
    //Debounce করা হলো এখানেঃ 
    const timerID = setTimeout(()=>{
      if(searchQuery){
        const filtered = countries.filter((country) => {
          return country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredCountries(filtered);
        console.log('log');
      } else {
        setFilteredCountries(countries);
      }
    }, 200);

    return ()=>clearTimeout(timerID);
    
  }, [searchQuery, countries])

  //Sorting Function
  const sortPopulation = () => {
    if (sortOrder === "Low to High") {
      let lowtToHigh = [...countries].sort((a, b) => {
        return a.population - b.population;
      });
      setCountry(lowtToHigh);
      setSortOrder("High to Low");
    } else {
      let highToLow = [...countries].sort((a, b) => {
        return b.population - a.population;
      });
      setCountry(highToLow);
      setSortOrder("Low to High");
    }
  };

  const countryInfoHandler = (e, country) => {
    setSelectedCountry(country);
  };

  const closeModal = () => {
    setSelectedCountry(null);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(e.target.value);

    
  };

  return (
    <>
      {selectedCountry && (
        <Modal selectedCountry={selectedCountry} close={() => closeModal()} />
      )}

      <Header searchQuery={searchQuery} handleSearch={handleSearch} />
      
      <div className="sort-btn-container">
        <SortButtons sort={() => sortPopulation()} sortOrder={sortOrder} />
      </div>

      <div className="min-h-screen flex flex-col justify-between">
        <div className="card-container">
          {filteredCountries.map((country) => {
            return (
              <CountryCard
                key={country.cca3}
                country={country}
                click={(e) => countryInfoHandler(e, country)}
              />
            );
          })}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Countries;
