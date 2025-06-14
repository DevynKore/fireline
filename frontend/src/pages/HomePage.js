import { useState } from 'react';
import CameraUpload from './CameraUpload'

function HomePage() {

    const [currentScreen, setCurrentScreen] = useState('home');

    const navigateTo = (screenName) => {
        setCurrentScreen(screenName);
    };
  
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',  // horizontal centering
        alignItems: 'center',      // vertical centering
        height: '50vh'            // full viewport height
      }}>

        {currentScreen === 'home' && ( // Button for navigation to camera
          <nav>
            <button onClick={() => navigateTo('cam')}>Upload Document</button>
          </nav>
        )}

        {currentScreen === 'cam' && ( // For navigating back home
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',  // Stack items vertically
            alignItems: 'flex-start'  // Align items to the left
          }}>
            <button onClick={() => navigateTo('home')}>
                Back to Home
                </button>
            <CameraUpload />
          </div>
        )}
      </div>
    );
}

export default HomePage;