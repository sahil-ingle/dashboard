import React from 'react';

const Dashboard = () => {
  // Fetch the necessary data from backend or use dummy data
  const amountCollectedToday = 500; // Amount collected at the current day
  const amountCollectedMonth = 2500; // Amount collected in the current month
  const amountCollectedYear = 10000; // Amount collected in the current year

  const userDetails = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  };

  return (
    <div style={styles.dashboard}>
      <div style={styles.amountSection}>
        <div style={styles.amountBox}>
          <h3>Amount Collected</h3>
          <p style={styles.amount}>${amountCollectedToday}</p>
        </div>
      </div>
      <div style={styles.userDetails}>
        <h3>User Details</h3>
        <p>Name: {userDetails.name}</p>
        <p>Email: {userDetails.email}</p>
        <p>Phone: {userDetails.phone}</p>
      </div>
    </div>
  );
};

export default Dashboard;

const styles = {
  dashboard: {
    padding: '20px',
  },
  amountSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  amountBox: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    flex: 1,
    marginRight: '10px',
  },
  amount: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#00b8b8'
  },
  userDetails: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};