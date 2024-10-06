import { useState, useEffect } from "react";
import style from "./Home.module.css";

const Home = () => {
  const [persons, setPersons] = useState(()=>{
    const storedPersons = localStorage.getItem("persons");
    return storedPersons ? JSON.parse(storedPersons) : [];
  });
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    aadharNumber: "",
    mobileNumber: "",
    age: "",
  });

  const [error, setError] = useState("");

  // Save persons to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons));
  }, [persons]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddPerson = (event) => {
    event.preventDefault();
    // Validation for Aadhar and Mobile Numbers
    if (formData.aadharNumber.length !== 12) {
      setError("Aadhar Number must be 12 digits.");
      return;
    }
    if (formData.mobileNumber.length !== 10) {
      setError("Mobile Number must be 10 digits.");
      return;
    }

    // Reset error if validation passes
    setError("");
    setPersons((prevPersons) => [formData, ...prevPersons]);
    setFormData({
      name: "",
      dateOfBirth: "",
      aadharNumber: "",
      mobileNumber: "",
      age: "",
    });
    setIsFormVisible(false);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Reset formData when the component mounts or unmounts
  useEffect(() => {
    setFormData({
      name: "",
      dateOfBirth: "",
      aadharNumber: "",
      mobileNumber: "",
      age: "",
    });
  }, []);

  const handleDeletePerson = (indexToDelete) => {
    const updatedPersons = persons.filter((_, index) => index !== indexToDelete);
    setPersons(updatedPersons);
  };

  return (
    <div>
      <h3>Add New Person</h3>
      <button onClick={toggleForm}>Add Person</button>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Aadhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <tr key={index} className={style.row}>
              <td>{person.name}</td>
              <td>{person.dateOfBirth}</td>
              <td>{person.aadharNumber}</td>
              <td>{person.mobileNumber}</td>
              <td>{person.age}</td>
              <td>
                <button onClick={() => handleDeletePerson(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isFormVisible && (
        <form onSubmit={handleAddPerson}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            placeholder="mm/dd/yy"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            placeholder="Aadhar number"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button>Save</button>
        </form>
      )}
      
    </div>
  );
};

export default Home;
