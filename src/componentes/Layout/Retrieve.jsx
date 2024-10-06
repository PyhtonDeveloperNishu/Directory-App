import { useState } from "react";
import style from "./Retrieve.module.css";

const Retrieve = () => {
  const [aadharNumber, setAadharNumber] = useState("");
  const [personInfo, setPersonInfo] = useState(null);

  // Retrieve persons from localStorage
  const storedPersons = JSON.parse(localStorage.getItem("persons")) || [];

  const handleInputChange = (e) => {
    setAadharNumber(e.target.value);
  };

  const handleFindPerson = () => {
    // Find person based on Aadhar number
    const foundPerson = storedPersons.find(
      (person) => person.aadharNumber === aadharNumber
    );
    setPersonInfo(foundPerson || null);
  };

  return (
    <div className={style.container}>
      <h4>Retrieve Information</h4>
      <input
        type="number"
        placeholder="Enter Aadhar Number"
        value={aadharNumber}
        onChange={handleInputChange}
      />
      <button onClick={handleFindPerson}>Find</button>
      <div className={style.info_container}>
        {personInfo ? (
          <div>
            <p>Name: {personInfo.name}</p>
            <p>Date of Birth: {personInfo.dateOfBirth}</p>
            <p>Aadhar Number: {personInfo.aadharNumber}</p>
            <p>Mobile Number: {personInfo.mobileNumber}</p>
            <p>Age: {personInfo.age}</p>
          </div>
        ) : (
          aadharNumber && <p>No person found with this Aadhar number.</p>
        )}
      </div>
    </div>
  );
};

export default Retrieve;
