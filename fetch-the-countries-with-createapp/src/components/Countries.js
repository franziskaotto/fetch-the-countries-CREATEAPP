
function Countries({ countryObj, setLearnCountry, setChosenCountry }) {
  console.log(countryObj[0]);

  function onLearnClick(country) {
    console.log("Country, Onclick", country);
    setLearnCountry(false);
    setChosenCountry((currentCountry) =>
    //console.log("CURRENT HERE -> ", currentCountry)

    [...currentCountry, country]
    );
    //setChosenCountry(country);
  }

  return (
    <>
      {countryObj.map((country) => (
        <div key={country.name.common}>
          <h2>{country.name.common}</h2>
          <button onClick={() => onLearnClick(country)}>Learn more</button>
        </div>
      ))}
    </>
  );
}



export default Countries;
