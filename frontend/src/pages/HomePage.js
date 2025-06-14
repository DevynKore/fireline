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
        <nav>
            <button onClick={() => navigateTo('cam')}>Upload Document</button>
        </nav> 

        {currentScreen === 'cam' && <CameraUpload />}

      </div>
    );
}

export default HomePage;