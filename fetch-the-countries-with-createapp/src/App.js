import { useState, useEffect } from "react";
import "./App.css";
import Countries from "./components/Countries.js";
import CountryData from "./components/CountryData.js";


const getData = (setCountriesData) => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((countryData) => setCountriesData(countryData));
};

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [learnCountry, setLearnCountry] = useState(true);
  const [chosenCountry, setChosenCountry] = useState([]);

  useEffect(() => {
    getData(setCountriesData);
  }, []);

  console.log(learnCountry);

  function returnSingleCountry() {
    console.log("HERE", countriesData);
    return (
      // <h1>HI</h1>
      <div>
        {countriesData && <CountryData chosenCountry={chosenCountry} />}
      </div>
    );
  }

  return (
    <>
      {learnCountry ? (
        <>
          <h1>Hello Countries</h1>
          <Countries
            countryObj={countriesData}
            setLearnCountry={setLearnCountry}
            setChosenCountry={setChosenCountry}
          />
        </>
      ) : (
        returnSingleCountry()
      )}
    </>
  );
}

export default App;
