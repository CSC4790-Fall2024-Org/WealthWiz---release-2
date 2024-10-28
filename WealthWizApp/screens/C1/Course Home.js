import React from 'react';

const WelcomeToInvesting = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Investing</h1>
      <p style={styles.description}>
        Start your journey to financial freedom by learning the basics of investing.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    margin: '0',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
    marginTop: '1rem',
    textAlign: 'center',
    maxWidth: '600px',
  },
};

export default WelcomeToInvesting;
