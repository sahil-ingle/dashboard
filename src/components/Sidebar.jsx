import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State variable to track expansion

  const handleMasterTabClick = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
  };

  return (
    <aside style={styles.sidebar}>
      <ul style={styles.optionList}>
        <Link to="/collectfee" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-money-bill-wave" style={styles.icon}></i>
            <span style={styles.optionText}>Collect Fee</span>
          </li>
        </Link>
        <Link to="/generatereceipts" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-receipt" style={styles.icon}></i>
            <span style={styles.optionText}>Generate Receipts</span>
          </li>
        </Link>

        {/* Master Tab */}
        <li style={styles.option} onClick={handleMasterTabClick}>
          <i className="fas fa-table" style={styles.icon}></i>
          <span style={styles.optionText}>Master Tab</span>
        </li>
        {isExpanded && (
          <ul style={styles.optionList}>
            <Link to="/addacademicyearform" className="navlink">
              <li style={styles.option}>
                <span style={styles.subOptionText}>Add Academic Year</span>
              </li>
            </Link>
            <Link to="/addbranchform" className="navlink">
              <li style={styles.option}>
                <span style={styles.subOptionText}>Add Branch</span>
              </li>
            </Link>
            <Link to="/addcategoryform" className="navlink">
              <li style={styles.option}>
                <span style={styles.subOptionText}>Add Category</span>
              </li>
            </Link>
            <Link to="/addfeeheadsform" className="navlink">
              <li style={styles.option}>
                <span style={styles.subOptionText}>Add Fee Heads</span>
              </li>
            </Link>
            <Link to="/addstudentform" className="navlink">
              <li style={styles.option}>
                <span style={styles.subOptionText}>Add Student</span>
              </li>
            </Link>
            <Link to="/mappingform" className="navlink">
              <li style={styles.option}>
                <span style={styles.subOptionText}>Mapping</span>
              </li>
            </Link>
          </ul>
        )}

        <Link to="/logout" className="navlink">
          <li style={styles.option}>
            <i className="fas fa-sign-out-alt" style={styles.icon}></i>
            <span style={styles.optionText}>Logout</span>
          </li>
        </Link>
      </ul>
      <footer style={styles.footer}>
        <p style={styles.footerText}>Ⓒ GetFly Technologies</p>
      </footer>
    </aside>
  );
};

export default Sidebar;

const styles = {
  sidebar: {
    backgroundColor: "#f9f9f9",
    padding: "10px 45px",
  },
  optionList: {
    listStyleType: "none",
    padding: 0,
  },
  option: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
    padding: "10px 0",
  },
  icon: {
    marginRight: "30px",
    width: "10px",
  },
  optionText: {
    fontSize: "16px",
  },
  subOptionText: {
    fontSize: "14px",
    color: "#888",
  },
  footer: {
    marginTop: "auto",
    alignSelf: "flex-end",
  },
  footerText: {
    fontSize: "12px",
    color: "#666",
    alignSelf: "flex-end",
    marginTop: "400px",
  },
};
