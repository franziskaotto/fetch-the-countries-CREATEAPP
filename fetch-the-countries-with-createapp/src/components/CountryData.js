

function CountryData({ chosenCountry }) {
  console.log(chosenCountry);


  //const nameArray= chosenCountry.name

  return (
    <>
      <h1>HEllo</h1>
      <div>
        {chosenCountry.map((country) => (

          <h1>{country.name.common}</h1>
        ))}
      </div>
    </>

    // <>

    //   <ul>
    //     {chosenCountry.map((country) => {
    //       <li key={country.name.common}>
    //         <h2>{country}</h2>
    //         <button>Learn more</button>
    //       </li>;
    //     })}

    //   </ul>

    // </>
  );
}

export default CountryData;