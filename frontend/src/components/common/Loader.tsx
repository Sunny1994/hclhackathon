import React from 'react';

interface LoadingScreenProps {
  pageName: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ pageName }) => {
  return (
    <div style={styles.container}>
      <img src="https://www.bing.com/th/id/OIP.qNd9egG7MamXUn2bH72iVwHaEK?w=276&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="Loading..." style={styles.spinner} />
      <h2>Loading {pageName}...</h2>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  spinner: {
    width: '50px',
    height: '50px',
    marginBottom: '20px',
  },
};

export default LoadingScreen;
