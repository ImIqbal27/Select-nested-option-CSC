import React, { useState } from "react";

const SelectOption = () => {
  const wholeAddress = [
    {
      divisionName: "Dhaka division",
      district: [
        {
          districtName: "Dhaka ",
          thanas: [
            "Adabar Thana",
            "Badda Thana",
            "Bangsal Thana",
            "Bimanbandar Thana ",
            "Cantonment Thana",
            "Chowkbazar Thana",
            "Darus Salam Thana",
            "Demra Thana",
            "Dhakshinkhan Thana",
            "Dhamrai Upazila",
            "Dhanmondi Thana",
            "Dohar Upazila",
            "Gendaria Thana",
            "Gulshan Thana",
            "Hazaribagh Thana",
            "Jatrabari Thana",
            "Kadamtali Thana",
            "Kafrul Thana",
            "Kalabagan",
            "Kamrangirchar Thana",
            "Keraniganj Upazila",
            "Khilgaon Thana",
            "Khilkhet Thana",
            "Kotwali Thana (Dhaka)",
            "Lalbagh Thana",
            "Mirpur Model Thana",
            "Mohammadpur Thana",
            "Motijheel Thana",
            "Nawabganj Upazila",
            "New Market Thana",
            "Pallabi Thana",
            "Paltan",
            "Panthapath",
            "Ramna Thana",
            "Rampura Thana",
            "Sabujbagh Thana",
            "Savar Upazila",
            "Shah Ali Thana",
            "Shahbag",
            "Sher-e-Bangla Nagar",
            "Shyampur Thana",
            "Sutrapur Thana",
            "Tejgaon Industrial Area Thana",
            "Tejgaon Thana",
            "Turag Thana",
            "Uttar Khan Thana",
            "Vatara Thana",
            "Wari Thana",
          ],
        },
        {
          districtName: "Faridpur",
          thanas: [
            "Alfadanga Upazila",
            "Bhanga Upazila",
            "Boalmari Upazila",
            "Charbhadrasan Upazila",
            "Faridpur Sadar Upazila",
            "Madhukhali Upazila",
            "Nagarkanda Upazila",
            "Sadarpur Upazila",
            "Saltha Upazila",
          ],
        },
        {
          districtName: "Gazipur",
          thanas: [
            "Gazipur Sadar Upazila",
            "Kaliakair Upazila",
            "Kaliganj Upazila",
            "Kapasia Upazila",
            "Sreepur Upazila",
          ],
        },
      ],
    },
    {
      divisionName: "Chattogram division",
      district: [
        {
          districtName: "Chattogram",
          thanas: [
            "Akbarshah Thana",
            "Bakoliya Thanaa ",
            " Bandar Thana",
            "Bayazid Thana",
            "Bhujpur Thana",
            "Chandgaon Thana",
            "Double Mooring Thana",
            "EPZ Thana",
            "Halishahar Thana",
            "Karnaphuli Upazila",
            "Khulshi Thana",
            "Kotwali Thana (Chittagong)",
            "Pahartali Thana",
            "Panchlaish Thana",
            "Patenga Thana",
          ],
        },
        {
          districtName: "Cox's bazar",
          thanas: [
            " Chakaria Upazila",
            "Cox's Bazar Sadar ",
            "Eidgaon Upazila",
            "Jaliadwip Upazila",
            "Kutubdia Upazila",
            "Moheshkhali Upazila",
            "Pekua Upazila",
            "Ramu Upazila",
            "Teknaf Upazila",
            "Ukhia Upazila",
          ],
        },
        {
          districtName: "Cumilla",
          thanas: [
            "Barura Upazila",
            "Brahmanpara Upazila",
            "Burichang Upazila",
            "Chandina Upazila",
            "Chapitala Union Parishad",
            "Chauddagram Upazila",
            "Comilla Adarsha Sadar Upazila",
            "Comilla Sadar Dakshin Upazila",
            "Daudkandi Upazila",
            "Debidwar Upazila",
            "Homna Upazila",
            "Laksam Upazila",
            "Lalmai Upazila",
            "Meghna Upazila",
            "Monohorgonj Upazila",
            "Muradnagar Upazila",
            "Nangalkot Upazila",
            "Titas Upazila",
          ],
        },
      ],
    },
  ];

  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [thana, setThana] = useState("");

  const [districts, setDistricts] = useState([]);

  const [thanas, setThanas] = useState([]);

  const changeDivision = (event) => {
    setDivision(event.target.value);
    setDistricts(
      wholeAddress.find((divi) => divi.divisionName === event.target.value)
        .district
    );
  };

  const changeDistrict = (event) => {
    setDistrict(event.target.value);
    setThanas(
      districts.find((dis) => dis.districtName === event.target.value).thanas
    );
  };

  const changeThana = (event) => {
    setThana(event.target.value);
  };

  const handleAddress = (e) => {
    e.preventDefault();
    console.log("form data=", division, "- ", district, " -", thana);
  };
  return (
    <div>
      <form onSubmit={handleAddress}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <div style={{ marginRight: "40px" }}>
            <h3>Select Division</h3>
            <select value={division} onChange={changeDivision}>
              <option>--Divisions--</option>
              {wholeAddress.map((divi) => (
                <option value={divi.divisionName}>{divi.divisionName}</option>
              ))}
            </select>
          </div>
          <div style={{ marginRight: "40px" }}>
            <h3>Select District</h3>
            <select value={district} onChange={changeDistrict}>
              <option>--District--</option>
              {districts.map((dis) => (
                <option value={dis.districtName}>{dis.districtName}</option>
              ))}
            </select>
          </div>
          <div style={{ marginRight: "40px" }}>
            <h3>Select Thana/Upazila</h3>
            <select value={thana} onChange={changeThana}>
              <option>--Thana--</option>
              {thanas.map((thana) => (
                <option value={thana}>{thana}</option>
              ))}
            </select>
          </div>
          <br />
          <div style={{ marginLeft: "40px", marginTop: "61px" }}>
            <button type="submit">Okay</button>
          </div>
        </div>
      </form>
      <div>
        <p>
          You have selected division:{" "}
          <h4 style={{ color: "red" }}>{division}</h4>
        </p>
        <p>
          You have selected district:
          <h4 style={{ color: "red" }}> {district}</h4>
        </p>
        <p>
          You have selected thana: <h4 style={{ color: "red" }}>{thana}</h4>
        </p>
      </div>
    </div>
  );
};

export default SelectOption;
