import React, { useState, useRef } from 'react';
import { Camera } from 'react-camera-pro';

// Setting up camera itself by accessing the DOM and setting variables to account for pre and post camera 
// actions
const CameraComponent = ({ onPhotoCapture, onError }) => {
    const camera = useRef(null); // Empty with no component
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const takePhoto = async () => {
        try {
            setIsLoading(true);
            const photo = camera.current.takePhoto();
            setImage(photo);

            if (onPhotoCapture){
                onPhotoCapture(photo);
            } 
        } catch (error) {
            console.error('Error taking photo:', error);
            if (onError) {
                onError(error);
            }
        } finally { // Ensure we also set setIsLoading to false no matter success or not.
            setIsLoading(false);
        }
    };

    const renderImage = () => {
        if (image) {
          return (
            <div style={{ marginTop: '20px' }}>
              <img src={image} alt="Captured" />
            </div>
          );
        } else {
          return null; // Render nothing
        }
    };

    // <Camera ref = {camera} assigns the component 'Camera' to the useRef hook
    return (
        <div style={{ width: '100%', height: '400px', position: 'relative' }}> 
            <Camera ref = {camera} /> 
            <div style={{ // Style for button that takes photo
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)'
            }}>
                <button // Button responsible for taking photo
                    onClick={ takePhoto }
                    disabled={ isLoading }
                    style={{
                        padding: '15px 30px',
                        borderRadius: '50px',
                        border: 'none',
                        backgroundColor: '#007bff',
                        color: 'white',
                        fontSize: '16px'
                    }}
                >
                    {isLoading ? 'Taking Photo...' : 'Capture'}
                </button>
                {renderImage()}
            </div>
        </div>
    )
};

export default CameraComponent;