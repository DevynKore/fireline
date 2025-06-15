import React, { useState, useRef } from 'react';
import { Camera } from 'react-camera-pro';

// Setting up camera itself by accessing the DOM and setting variables to account for pre and post camera 
// actions
const CameraComponent = ({ onPhotoCapture, onError }) => {
    const camera = useRef(null); // Empty with no component
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Taking photo 
     */
    const takePhoto = async () => {
        try {
            setIsLoading(true);
            // Where the photo is first captured
            const photo = camera.current.takePhoto();
            setImage(photo);
            console.log(photo);

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

    /**
     * Renders the photo taken
     * @returns image presnetation or nothing
     */
    const renderImage = () => {
        if (image) {
          return (
            <div style={{ marginTop: '10px' }}>
              <img src={image} alt="Captured" />
            </div>
          );
        } else {
          return null; // Render nothing
        }
    };

    const resetCamera = () => {
        setImage(null);

        if(camera.current && camera.current.reset) {
            camera.current.reset();
        }
    }
    // <Camera ref = {camera} assigns the component 'Camera' to the useRef hook
    return (
        <div> 
            <Camera ref = {camera}  facingMode={'environment'}/> 
            <div style={{ // Style for button that takes photo
                position: 'absolute',
                bottom: '10px',
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
            </div>
            {renderImage()}
        </div>
    )
};

export default CameraComponent;