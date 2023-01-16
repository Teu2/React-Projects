import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchAutoComplete } from './Components/Search Card/SearchAutoComplete';

function App() {

  const [countries, setCountries] = useState([]);
  const [countryMatch, setCountryMatch] = useState([]);
  
  const loadCountries = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    setCountries(response.data);
  } 

  useEffect(() => {
    loadCountries();
  }, [])

  const searchCountries = (event) => {
    let matches = countries.filter((country) => {
      // console.log(`country.name type: ${typeof country.name.common} ${country.name.common}`);
      const regex = new RegExp(`${event}`, "gi"); // "gi" required for case sensitive
      return country.name.common.match(regex)
    })

    if(event === ""){
      setCountryMatch([]);
    }else{
      setCountryMatch(matches);
    }
  }

  console.log(countries);
  console.log(`COPUNTRY MATCH : ${countryMatch}`);

  return (
    <div className="App">
      <h2>COUNTRY AUTO-COMPLETE</h2>
      <input type="text" placeholder='Try it out! Start typying a country!' onChange={(event) => searchCountries(event.target.value)} style={{width: "50%"}} />
        {countryMatch && countryMatch.map((item, index) => (
          <div className="parent-div">
            <SearchAutoComplete imgUrl={item.flags.png} flag={item.flag} countryName={item.name.common} index={index}/>
          </div>
        ))}
    </div>
  );
}

export default App;
