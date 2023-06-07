import React, { useState, useEffect } from "react";

const AddAcademicYearForm = () => {

  const [currentTime, setCurrentTime] = useState(new Date());
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

  //academic year selector
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
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

      <h3>Master {'>'} Add Academic Year</h3>

      <div style={styles.formContainer}>
      <form onSubmit={handleFormSubmit}>

          <div style={styles.inputGroup}>
            <label htmlFor="academicYear">Academic Year:</label>
            <input
              type="number"
              id="academicYear"
              value={academicYear}
              placeholder="2024 - 2028"
              onChange={(e) => setAcademicYear(parseInt(e.target.value))}
              style={styles.input}
            />
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.submitButton}>
              Add Year
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default AddAcademicYearForm;


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
  },

  inputGroup: {
    display: "flex",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  label: {
    marginRight: "10px",
    padding: "10px",
  },
  input: {
    padding: "5px",
    marginRight: "30px",
    marginBottom: "30px",
    marginLeft: "30px"
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
