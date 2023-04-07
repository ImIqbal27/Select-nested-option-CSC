import React from "react";
import { useState } from "react";

const SelectOption = () => {
  const countries = [
    {
      name: "Las angles",
      states: [
        {
          name: "LA first state",
          cities: ["LA first state city area 1", "LA first state city area 2"],
        },
        {
          name: "LA second state",
          cities: [
            "LA second state- city area 3",
            "LA second state- city area 4",
          ],
        },
        {
          name: "LA third state",
          cities: ["LA third state city area 5", "LA third state city area 6"],
        },
      ],
    },
    {
      name: "varginia",
      states: [
        {
          name: "varginia first state",
          cities: [
            "varginia first state city area 7",
            "varginia first state city area 8",
          ],
        },
        {
          name: "varginia second state",
          cities: [
            " varginia second state city area 9",
            "varginia second state city area 10",
          ],
        },
        {
          name: "varginia third state",
          cities: [
            "varginia third state city area 11",
            "varginia third state city area 12",
          ],
        },
      ],
    },
  ];

  const [country, setCountry] = useState("--Country--");

  const [state, setState] = useState("--State--");

  const [city, setCity] = useState("--City--");

  const [states, setStates] = useState([]);

  const [cities, setCities] = useState([]);

  const changeCountry = (event) => {
    setCountry(event.target.value);
    setStates(countries.find((ctr) => ctr.name === event.target.value).states);
  };

  const changeState = (event) => {
    setState(event.target.value);
    setCities(states.find((state) => state.name === event.target.value).cities);
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  //   console.log("country==", country);
  //   console.log("statesss===", state);
  //   console.log("city====", city);

  const handleAddress = (e) => {
    e.preventDefault();
    console.log("form data=", country, "- ", state, " -", city);
  };

  return (
    <div>
      <form onSubmit={handleAddress}>
        <div>
          <div>
            <h3>Select Country</h3>
            <select value={country} onChange={changeCountry}>
              <option>--Country--</option>
              {countries.map((ctr) => (
                <option value={ctr.name}>{ctr.name}</option>
              ))}
            </select>
          </div>
          <div>
            <h3>Select State</h3>
            <select value={state} onChange={changeState}>
              <option>--State--</option>
              {states.map((state) => (
                <option value={state.name}>{state.name}</option>
              ))}
            </select>
          </div>
          <div>
            <h3>Select City</h3>
            <select value={city} onChange={changeCity}>
              <option>--City--</option>
              {cities.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>
          <button type="submit">Okay</button>
        </div>
      </form>

      <hr />
      <div>
        <p>
          You have select country: <h2 style={{ color: "red" }}>{country}</h2>
        </p>
        <p>
          You have select state:<h2 style={{ color: "red" }}> {state}</h2>
        </p>
        <p>
          You have select city: <h2 style={{ color: "red" }}>{city}</h2>
        </p>
      </div>
    </div>
  );
};

export default SelectOption;
