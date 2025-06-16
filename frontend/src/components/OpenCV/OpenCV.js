import React, { useRef, useEffect } from 'react';
import useOpenCV from '../../services/OpenCV/useOpenCV'

const OpenCVDemo = ({}) => {
  const { opencv, loading } = useOpenCV();
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  const processImage = () => {
    if (!opencv) return;
    
    // Read image from img element
    const img = opencv.imread(imgRef.current);
    
    // Convert to grayscale
    const gray = new opencv.Mat();
    opencv.cvtColor(img, gray, opencv.COLOR_RGBA2GRAY);
    
    // Display result
    opencv.imshow(canvasRef.current, gray);
    
    // Clean up memory (very important!)
    img.delete();
    gray.delete();
  };

  if (loading) return <div>Loading OpenCV...</div>;

  return (
    <div>
      <img ref={imgRef} src="your-image.jpg" style={{display: 'none'}} />
      <canvas ref={canvasRef}></canvas>
      <button onClick={processImage}>Convert to Grayscale</button>
    </div>
  );
};

export default OpenCVDemo;