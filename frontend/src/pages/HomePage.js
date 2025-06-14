function HomePage() {
    const handleClick = () => {
      alert('Document Upload');
    };
  
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',  // horizontal centering
        alignItems: 'center',      // vertical centering
        height: '50vh'            // full viewport height
      }}>
      <button onClick={handleClick}>
        Upload Document
        </button>
      </div>
    );
}

export default HomePage;