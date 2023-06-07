import React, { useState, useEffect } from "react";

const AddStudentForm = () => {

  const [title, setTitle] = useState("");

  const [currentTime, setCurrentTime] = useState(new Date());
  const [name, setName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [pin, setPin] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [previousInstitute, setPreviousInstitute] = useState("");
  const [previousEducation, setPreviousEducation] = useState("");
  const [yearOfAdmission, setYearOfAdmission] = useState("");
  const [yearOfPassing, setYearOfPassing] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [category, setCategory] = useState("");
  const [seatType, setSeatType] = useState("");
  const [branch, setBranch] = useState("");
  const [gradeMarks, setGradeMarks] = useState(0);
  const [academicYear, setAcademicYear] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = () => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return currentTime.toLocaleString("en-US", options);
  };

  const formatTime = () => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return currentTime.toLocaleString("en-US", options);
  };

  const formatWeekday = () => {
    const options = {
      weekday: "long",
    };
    return currentTime.toLocaleString("en-US", options);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log("Title:", title);
    console.log("Name:", name);
    console.log("Address Line 1:", addressLine1);
    console.log("Address Line 2:", addressLine2);
    console.log("Pin:", pin);
    console.log("Telephone:", telephone);
    console.log("Email:", email);
    console.log("Date of Birth:", dob);
    console.log("Previous Institute:", previousInstitute);
    console.log("Previous Education:", previousEducation);
    console.log("Year of Admission:", yearOfAdmission);
    console.log("Year of Passing:", yearOfPassing);
    console.log("Current Status:", currentStatus);
    console.log("Category:", category);
    console.log("Seat Type:", seatType);
    console.log("Branch:", branch);
    console.log("Grade Marks:", gradeMarks);
    console.log("Academic Year:", academicYear);
  };

  return (
    <div style={styles.mainContent}>
      <div style={styles.greeting}>
        <h1>Hello, User</h1>
        <div className="dt" style={styles.dt}>
          <p className="para">{formatDate()}</p>
          <p className="para">{formatWeekday()}</p>
          <p className="para">{formatTime()}</p>
        </div>
      </div>
      <hr style={styles.horizontalLine} />

      <h3>Master {'>'} Adding Students</h3>

      <div style={styles.formContainer}>
        <form onSubmit={handleFormSubmit}>

          <div style={styles.inputGroup}>
            
            <label htmlFor="name">Name:</label>
            <select
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ ...styles.input,width: "58px", marginRight: "0px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px" }}
            >
              <option value="title" disabled hidden>Select Title</option>
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Ms.">Ms.</option>
            </select>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Lorem Ipsum"
              onChange={(e) => setName(e.target.value)}
              style={{ ...styles.input, marginLeft: "0px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }}
            />
            <label htmlFor="telephone">Telephone</label>
            <input
              type="number"
              id="telephone"
              value={telephone}
              placeholder="99999 99999"
              onChange={(e) => setTelephone(e.target.value)}
              style={styles.input}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="loren@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              value={dob}
              placeholder="01/01/01"
              onChange={(e) => setDob(e.target.value)}
              style={{ fontWeight: "bold", ...styles.input }}
            />
            <label htmlFor="pin">Pin:</label>
            <input
              type="number"
              id="pin"
              value={pin}
              placeholder="400022"
              onChange={(e) => setPin(e.target.value)}
              style={{ ...styles.input, width: "75px" }}
            />
            <label htmlFor="addressLine1">Address Line 1:</label>
            <input
              type="text"
              id="addressLine1"
              value={addressLine1}
              placeholder="400022"
              onChange={(e) => setAddressLine1(e.target.value)}
              style={styles.input}
            />
            <label htmlFor="addressLine2">Address Line 2:</label>
            <input
              type="text"
              id="addressLine2"
              value={addressLine2}
              placeholder="400022"
              onChange={(e) => setAddressLine2(e.target.value)}
              style={styles.input}
            />
          </div>

          <hr />

          <div style={styles.inputGroup}>
            <label htmlFor="previousInstitute">Previous Institute:</label>
            <input
              type="text"
              id="previousInstitute"
              value={previousInstitute}
              onChange={(e) => setPreviousInstitute(e.target.value)}
              style={styles.input}
            />
            <label htmlFor="previousEducation">Previous Education:</label>
            <input
              type="text"
              id="previousEducation"
              value={previousEducation}
              onChange={(e) => setPreviousEducation(e.target.value)}
              style={styles.input}
            />
            <label htmlFor="gradeMarks">Grade Marks:</label>
            <input
              type="number"
              id="gradeMarks"
              value={gradeMarks}
              placeholder="999"
              onChange={(e) => setGradeMarks(parseInt(e.target.value))}
              style={{ ...styles.input, width: "70px" }}
            />
          </div>


          <div style={styles.inputGroup}>
            <label htmlFor="yearOfAdmission">Year of Admission:</label>
            <input
              type="number"
              id="yearOfAdmission"
              value={yearOfAdmission}
              placeholder="01/01/01"
              onChange={(e) => setYearOfAdmission(e.target.value)}
              style={{ ...styles.input, width: "75px" }}
            />
            <label htmlFor="yearOfPassing">Year of Passing:</label>
            <input
              type="number"
              id="yearOfPassing"
              value={yearOfPassing}
              placeholder="01/01/01"
              onChange={(e) => setYearOfPassing(e.target.value)}
              style={{ ...styles.input, width: "75px" }}
            />
            <label htmlFor="currentStatus">Current Status:</label>
            <input
              type="text"
              id="currentStatus"
              value={currentStatus}
              onChange={(e) => setCurrentStatus(e.target.value)}
              style={styles.input}
            />
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={styles.input}
            >
              <option value="category" disabled hidden>Select Category</option>
              <option value="open">General</option>
              <option value="obc">OBC</option>
              <option value="sc">SC</option>
              <option value="st">ST</option>
            </select>
          </div>

          <hr />

          <div style={styles.inputGroup}>
            <label htmlFor="seatType">Seat Type:</label>
            <select
              id="seatType"
              value={seatType}
              onChange={(e) => setSeatType(e.target.value)}
              style={styles.input}
            >
              <option value="seattype" disabled hidden>Select Seat type</option>
              <option value="regular">Regular</option>
              <option value="quota">Quota</option>
            </select>
            <label htmlFor="branch">Branch:</label>
            <select
              id="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              style={styles.input}
            >
              <option value="branch" disabled hidden>Select Branch</option>
              <option value="computer">Computer Science</option>
              <option value="electrical">Electrical</option>
              <option value="mechanical">Mechanical</option>
              <option value="civil">Civil</option>
            </select>
            <label htmlFor="academicYear">Admitted to Academic Year:</label>
            <input
              type="number"
              id="academicYear"
              value={academicYear}
              placeholder="2019-2023"
              onChange={(e) => setAcademicYear(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;

const styles = {
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  greeting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  dt: {
    display: "flex",
    flexDirection: "column",
    margin: "0 5px",
  },
  para: {
    margin: "2px 0",
  },
  horizontalLine: {
    border: "none",
    borderTop: "1px solid #ccc",
    margin: "20px 0",
  },

  formContainer: {
    padding: "20px",
    borderRadius: "4px",
    flex: "none",
  },

  inputGroup: {
    marginBottom: "10px",
    fontWeight: "bold",

  },
  label: {
    marginRight: "10px",
    padding: "10px",
    marginBottom: "20px",
    marginTop: "20px",
  },
  input: {
    padding: "5px",
    marginRight: "30px",
    marginBottom: "20px",
    marginLeft: "20px",
    marginTop: "20px",
    borderRadius: "5px",
    borderColor: "#4d4d4d",
  },
  buttonContainer: {
    display: "flex",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#00b695",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
